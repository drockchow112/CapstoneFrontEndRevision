import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchProductThunk,
} from "../../thunks";

import { ProductView } from "../views";

class UserContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchUser(this.props.match.params.id);
  }

  render() {
    return (
      <ProductView
        product={this.props.product}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
    console.log(state)
  return {
    product: state.product,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchProductThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(UserContainer);