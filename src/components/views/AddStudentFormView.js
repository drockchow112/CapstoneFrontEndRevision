import React from "react";
import PropTypes from "prop-types";

const AddStudentFormView = (props) => {
  return (
    <div>
       <h2><u>Add New Student</u></h2>
       <br/>
      <form onSubmit={props.handleSubmit}>
        <div>
          firstName:{" "}
          <input
            value={props.firstName}
            name="firstName"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          lastName:{" "}
          <input
            value={props.lastName}
            name="lastName"
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
        <div>
          Image Url:{" "}
          <input
            value={props.imageUrl}
            name="imageUrl"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          gpa:{" "}
          <input
            type="number" 
            step="any"
            value={props.gpa}
            name="gpa"
            onChange={props.handleChange}
          ></input>
        </div>
        <br/>
        <button className="btn btn-primary">Add student</button>
      </form>
    </div>
  );
};

AddStudentFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  //gpa:PropTypes.number.isRequired,
};

export default AddStudentFormView;
