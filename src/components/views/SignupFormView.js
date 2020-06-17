import React from "react";
import PropTypes from "prop-types";

const SignupFormView = (props) => {
  return (
    <div>
      <h2><u>Sign Up</u></h2>
      <br/>
      <form onSubmit={props.handleSubmit}>
        <div>
          userName:{" "}
          <input
            value={props.userName}
            name="userName"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          Password:{" "}
          <input
            value={props.password}
            name="password"
            type="password"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
        email:{" "}
          <input
            type="email"
            value={props.email}
            name="email"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <br/>
        <button className="btn btn-primary">Signup</button>
      </form>
    </div>
  );
};

SignupFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default SignupFormView;
