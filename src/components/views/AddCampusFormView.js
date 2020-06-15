import React from "react";
import PropTypes from "prop-types";

const AddCampusFormView = (props) => {
  return (
    <div>
      <h2><u>Add New Campus</u></h2>
      <br/>
      <form onSubmit={props.handleSubmit}>
        <div>
          Name:{" "}
          <input
            value={props.name}
            name="name"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          Address:{" "}
          <input
            value={props.address}
            name="address"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          Description:{" "}
          <input
            value={props.description}
            name="description"
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
        <br/>
        <button className="btn btn-primary">Create Campus</button>
      </form>
    </div>
  );
};

AddCampusFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default AddCampusFormView;
