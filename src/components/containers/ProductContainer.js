import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchProductThunk,addItemThunk 
} from "../../thunks";

import { ProductView } from "../views";

class UserContainer extends Component {

  handleSubmit = (e) => {
    let item={
      barcode:this.props.product.barcode_number ,
      name:this.props.product.product_name,
      imageUrl:this.props.product.images[0],
      userId:this.props.user.id,

    }
    
    e.preventDefault();
    this.props.addItem(item);
  };
  componentDidMount() {
   
    this.props.fetchProduct(this.props.match.params.id);
  }

  render() {
    return (
      <ProductView
        user={this.props.user}
        product={this.props.product}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    user:state.user,
    product: state.product,
  };
};

const mapDispatch = (dispatch,ownProps) => {
  return {
    fetchProduct: (id) => dispatch(fetchProductThunk(id)),
    addItem:(Item)=>dispatch(addItemThunk(Item,ownProps)),
  };
};

export default connect(mapState, mapDispatch)(UserContainer);