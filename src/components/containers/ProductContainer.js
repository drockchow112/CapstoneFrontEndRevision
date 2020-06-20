import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchProductThunk,addItemThunk 
} from "../../thunks";

import { ProductView } from "../views";

class UserContainer extends Component {

  // constructor(props) {
  //   super(props);
  //   console.log(this.props.product)
  //   this.state = {
  //     item:this.props.product,
  //   };
  // }
  handleSubmit = (e) => {
    let item={
      barcode:this.props.product.barcode_number ,
      name:this.props.product.product_name,
      imageUrl:this.props.product.images[0],
      userId:1,

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
        product={this.props.product}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
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