import React from "react";
import PropTypes from "prop-types";

const LogInFormView = props => {
  console.log(props);
  return (
    <div class="center">
      <body class="text-center">
        <form class="form-signin" onSubmit={props.handleSubmit}>
          <h2 class="h3 mb-3 font-weight-normal">Log In</h2>
          {props.userExists ? <h4>The user already exists.</h4> : <></>}
          <br />
          <div>
            Username:{" "}
            <input
              class="form-control"
              value={props.userName}
              name="userName"
              onChange={props.handleChange}
              required
            ></input>
          </div>
          <div>
            Password:{" "}
            <input
              class="form-control"
              value={props.password}
              type="password"
              name="password"
              type="password"
              onChange={props.handleChange}
              required
            ></input>
          </div>
          <br />
          <button className="btn btn-primary">Submit</button>
        </form>
      </body>
    </div>
  );
};

LogInFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default LogInFormView;
