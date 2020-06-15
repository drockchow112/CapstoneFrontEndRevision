import React from "react";
import PropTypes from "prop-types";

const EditCampusFormView = (props) => {
  return (
    <div className>
      <h2><u>Edit {props.name} information</u></h2>
      <br/>
      <form onSubmit={props.handleSubmit}>
        <div className="form-group ">
          <label>Name:</label>
          <input
            value={props.name}
            className=""
            name="name"
            onChange={props.handleChange}
          ></input>
        </div>
        <div className="form-group">
          Address:{" "}
          <input
            value={props.address}
            name="address"
            onChange={props.handleChange}
          ></input>
        </div >
        <div className="form-group ">
          Description:{" "}
          <input
            value={props.description}
            name="description"
            onChange={props.handleChange}
          ></input>
        </div >
        <div className="form-group ">
          Image Url:{" "}
          <input
            value={props.imageUrl}
            name="imageUrl"
            onChange={props.handleChange}
          ></input>
        </div>
        <button className="btn btn-primary">Edit Campus</button>
      </form>
    </div>
  );
};

EditCampusFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default EditCampusFormView;
