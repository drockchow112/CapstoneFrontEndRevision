import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchProductsThunk } from "../../thunks";

import { NavBarView } from "../views";

class NavBarContainer extends Component {
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
    return <NavBarView 
    search={this.state.search}
    handleSubmit={this.handleSubmit}
    handleChange={this.handleChange}
    />;
  }
}

const mapDispatch = (dispatch, ownProps) => {
  console.log(ownProps)
  return {
    searchProducts: (Search) => dispatch(searchProductsThunk(Search, ownProps)),
  };
};
NavBarContainer.propTypes = {
  searchProducts: PropTypes.func.isRequired,
};
export default connect(null, mapDispatch)(NavBarContainer);
