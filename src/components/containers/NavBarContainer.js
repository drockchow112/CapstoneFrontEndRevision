import React, { Component } from "react";
//import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavBarView } from "../views";
import { fetchSearchThunk } from "../../thunks";

class NavBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""//shoes
    };
  }



//



componentDidMount() {
  this.props.fetchSearch();
}


  handleChange = (e) => {
    this.setState({
      [e.target.search]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    /*
    const id = this.props.match.params.id;
    this.props.editCampus(id, this.state);
    this.props.history.push(`/campuses/${id}`);
    */
  };

  render() {
    return (
      <NavBarView
        search={this.state.search}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
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
    fetchSearch: () => dispatch(fetchSearchThunk())
  };
};

/*
NavBarContainer.propTypes = {
  fetchSearch: PropTypes.func.isRequired,
  //editCampus: PropTypes.func.isRequired,
};
*/

export default connect(mapState, mapDispatch)(NavBarContainer);
