import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchUserThunk,
} from "../../thunks";

import { UserView } from "../views";

class UserContainer extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  render() {
    return (
      <UserView
        user={this.props.user}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
    console.log(state)
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUserThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(UserContainer);