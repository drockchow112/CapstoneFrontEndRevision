import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { HomePageView } from "../views";
import { fetchSearchThunk } from "../../thunks";

//const { HomePageView } = require("../views");


class DisplaySearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //json data from api to load into state
        productName: '',
        images: '', 
        storePrice: '',
        imageUrl: '',
        text: ""//shoes
    };
  }
  componentDidMount() {
   /* this.props.fetchSearch(this.props.match.params.search).then(({ payload }) => {
     this.setState(payload);
    });
    */
   console.log( this.props.fetchSearch() )
  }

  render() {
      console.log("this is my props: "+props)
    return (
      <HomePageView
        productName={this.state.product_name}
        images={this.state.images[0]}
        storePrice={this.state.stores[0].store_price}
        imageUrl={this.state.imageUrl}
      />
    );
  }
}

const mapState = (state) => {
    console.log(state)
  return { state };
};

const mapDispatch = (dispatch) => {
  return {
    fetchSearch: (search) => dispatch(fetchSearchThunk(search))
  };
};

DisplaySearchContainer.propTypes = {
  fetchSearch: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(DisplaySearchContainer);
