import React from "react";
import PropTypes from "prop-types";

const EditStudentFormView = (props) => {
  return (
    <div>
       <h2><u>Edit {props.firstName} {props.lastName} information</u></h2>
      <br/>
      <form onSubmit={props.handleSubmit}>
      <div>
          Firstname:{" "}
          <input
            value={props.firstName}
            name="firstName"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          Lastname:{" "}
          <input
            value={props.lastName}
            name="lastName"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          Email:{" "}
          <input
            type="email"
            value={props.email}
            name="email"
            onChange={props.handleChange}
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
          GPA:{" "}
          <input
            type="number"
            value={props.gpa}
            name="gpa"
            onChange={props.handleChange}
          ></input>
        </div>
        <button className="btn btn-primary">edit student</button>
      </form>
    </div>
  );
};

EditStudentFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  //gpa:PropTypes.string.isRequired,

};

export default EditStudentFormView;