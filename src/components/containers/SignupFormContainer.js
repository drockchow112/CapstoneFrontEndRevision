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
      errors: {}
    };
  }

  handleChange = e => {
    if (e.target.name === "userName") {
      this.setState({ userName: e.target.value }, this.validateName);
      console.log(this.state.userName);
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  validateName = () => {
    //check is the userName length great than 5
    const { userName } = this.state;
    let errors = { ...this.state.errors };
    let isValidName = true;
    if (userName.length < 6) {
      isValidName = false;
      errors.userName = "Invalid username, please enter more than 5 characters";
    }
    if (isValidName) {
      errors.userName = "valid username";
    }
    this.setState({ isValidName, errors });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.isValidName) this.props.addUser(this.state);
  };

  render() {
    console.log(this.props);
    console.log(this.props.userExists);

    return (
      <>
        {/* Can potentially be extracted into its own ErrorMessage component */}
        {/* {this.state.isValidName ? "" : this.state.errors.userName} */}
        <SignupFormView
          userName={this.state.userName}
          password={this.state.password}
          email={this.state.email}
          userExists={this.props.userExists}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { userExists: state.allUsers.userExists };
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    addUser: User => dispatch(addUserThunk(User, ownProps))
  };
};

SignupFormContainer.propTypes = {
  addUser: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatch)(SignupFormContainer);
