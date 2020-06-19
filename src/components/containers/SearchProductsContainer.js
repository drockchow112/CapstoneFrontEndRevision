import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchProductsThunk } from "../../thunks";

import { SearchProductsView } from "../views";

class SearchProductsContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      search:"",
    };
  }
  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
  };
  handleSubmit = (e) => {
    e.preventDefault();
     this.props.searchProducts(this.state);
  };

  render() {
      console.log(this.props)
    return <SearchProductsView 
    Products={this.props.Products}
    search={this.state.search}
    handleSubmit={this.handleSubmit}
    handleChange={this.handleChange}
    />;
  }
}
// Map state to props;
const mapState = (state) => {
    console.log(state)
  return {
    Products: state.searchProducts,
  };
};
// Map dispatch to props;
const mapDispatch = (dispatch, ownProps) => {
  return {
    searchProducts: (Search) => dispatch(searchProductsThunk(Search, ownProps)),
  };
};
// Type check props;
SearchProductsContainer.propTypes = {
  searchProducts: PropTypes.func.isRequired,
};
export default connect(mapState, mapDispatch)(SearchProductsContainer);
