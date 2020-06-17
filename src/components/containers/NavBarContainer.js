import React, { Component } from "react";

import { NavBarView } from "../views";

class NavBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""//shoes
    };
  }



//



  componentDidMount() {
    this.props.fetchSearch(this.props.match.params.id).then(({ payload }) => {
      this.setState(payload);
    });
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
      <NewNavBarView
        search={this.state.search}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapState = (state) => {
  return { campus: state.campus };
};

const mapDispatch = (dispatch) => {
  return {
    fetchSearch: (id) => dispatch(fetchSearchThunk(id))
  };
};

/*
NavBarContainer.propTypes = {
  fetchSearch: PropTypes.func.isRequired,
  //editCampus: PropTypes.func.isRequired,
};
*/

export default connect(mapState, mapDispatch)(NavBarContainer);
