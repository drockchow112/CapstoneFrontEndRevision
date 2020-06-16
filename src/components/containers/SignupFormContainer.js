import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SignupFormView } from "../views";
import { addUserThunk } from "../../thunks";

class SignupFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      email: "",
      isValidName: false,
      errors: {},
    };
  }

  handleChange = (e) => {
      this.setState({
        [e.target.userName]: e.target.value,
      });
    if (e.target.userName === "userName") {
      this.setState({ userName: e.target.value }, this.validateName);
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  validateName = () => {
    const { userName } = this.state;
    let errors = { ...this.state.errors };
    let isValidName = true;
    if (userName.length < 6) {
      isValidName = false;
      errors.userName = "Invalid userName";
    }

    if (isValidName) {
      errors.userName = "valid userName";
    }
    this.setState({ isValidName, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.isValidName) this.props.addUser(this.state);
  };

  render() {
    return (
      <>
        {/* Can potentially be extracted into its own ErrorMessage component */}
        {this.state.isValidName ? "" : this.state.errors.userName}
        <SignupFormView
          userName={this.state.userName}
          password={this.state.password}
          email={this.state.email}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

const mapDispatch = (dispatch, ownProps) => {
    console.log("map")
  return {
    addUser: (User) => dispatch(addUserThunk(User, ownProps)),
  };
};

SignupFormContainer.propTypes = {
  addUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(SignupFormContainer);