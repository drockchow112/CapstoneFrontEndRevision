import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllItemsThunk, deleteItemThunk } from "../../thunks";
import { AllItemsView } from "../views";

// Smart container;
class AllUsersContainer extends Component {
  componentDidMount() {
    this.props.fetchAllItems();
  }

  handleDelete = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    return (
      <AllItemsView
        allItems={this.props.allItems}
        handleDelete={this.handleDelete}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allItems: state.allItems,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllItems: () => dispatch(fetchAllItemsThunk()),
    deleteItem: (id) => dispatch(deleteItemThunk(id)),
  };
};

// Type check props;
AllUsersContainer.propTypes = {
  allItems: PropTypes.array.isRequired,
  fetchAllItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllUsersContainer);