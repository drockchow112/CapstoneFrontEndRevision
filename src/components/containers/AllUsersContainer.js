import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllUsersThunk, deleteUserThunk } from "../../thunks";
import { AllUsersView } from "../views";

// Smart container;
class AllUsersContainer extends Component {
  componentDidMount() {
    this.props.fetchAllUsers();
  }

  handleDelete = (id) => {
    this.props.deleteUser(id);
  };

  render() {
    return (
      <AllUsersView
        allUsers={this.props.allUsers}
        handleDelete={this.handleDelete}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allUsers: state.allUsers,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsersThunk()),
    deleteUser: (id) => dispatch(deleteUserThunk(id)),
  };
};

// Type check props;
AllUsersContainer.propTypes = {
  allUsers: PropTypes.array.isRequired,
  fetchAllUsers: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllUsersContainer);
