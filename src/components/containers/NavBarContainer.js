import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavBarView } from "../views";
import { fetchSearchThunk } from "../../thunks";

class NavBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""//shoes
    };
  }

componentDidMount() {
  this.props.fetchSearch();
}

handleChange = (e) => {
  //console.log(e.target.value)
  this.setState({
    text: e.target.value,   
  });
  //console.log(this.state.text)
};

  handleSubmit = (e) => {
    //console.log("container props is :"+e.target)
    e.preventDefault();
    //console.log(this.state)
    this.props.fetchSearch(this.state)
    //console.log(this.state.text)
  };

  render() {
    return (
      <NavBarView
        search={this.state.text}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapState = (state) => {
  return { state };
};

const mapDispatch = (dispatch) => {
  return {
    fetchSearch: (search) => dispatch(fetchSearchThunk(search))
  };
};

NavBarContainer.propTypes = {
  fetchSearch: PropTypes.func.isRequired,
};


export default connect(mapState, mapDispatch)(NavBarContainer);
