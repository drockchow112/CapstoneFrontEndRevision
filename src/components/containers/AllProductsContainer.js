import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllProductsThunk } from "../../thunks";
import { AllProductsView } from "../views";

// Smart container;
class AllProductsContainer extends Component {

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    return (
      <AllProductsView
        allProducts={this.props.allProducts}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allProducts: state.allProducts,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllProducts: () => dispatch(fetchAllProductsThunk()),
  };
};

// Type check props;
AllProductsContainer.propTypes = {
  //allProducts: PropTypes.array.isRequired,
  fetchAllProducts: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllProductsContainer);