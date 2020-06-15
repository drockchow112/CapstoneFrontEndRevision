import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllCampusesThunk } from "../../thunks";

class AddCampusToStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { campusId: "" };
  }
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  // when the enroll campus button is clicked
  // send a put request for the campus
  // change the campus id to the id of the campus we are on

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleEnrollStudent( this.state.campusId,this.props.studentId);
  };

  render() {
    return (
      <div>
        <h3>Change Campus for this Student</h3>

        <form onSubmit={this.handleSubmit}>
          <select name="campusId" onChange={this.handleChange}>
            <option value="">Please select a campus</option>
            {this.props.allCampuses
              .map((campus) => {
                return (
                  <option value={campus.id} key={campus.id}>
                    {campus.name}
                  </option>
                );
              })}
          </select>
          <button className="btn btn-primary" type="submit">Enroll Campus</button>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return { allCampuses: state.allCampuses };
};

const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  };
};

export default connect(mapState, mapDispatch)(AddCampusToStudentContainer);
