import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, deleteStudentThunk,enrollStudentThunk, } from "../../thunks";

import { StudentView } from "../views";

class StudentContainer extends Component {
  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id);
  }

  handleDelete = (id) => {
    this.props.deleteStudent(id);
    this.props.history.push("/students");
  };

  handleEnrollStudent = (campusId, studentId) => {
    console.log("dad"+campusId, studentId)
    this.props.enrollStudent(campusId, studentId);
    //alert("reflash the page");
  };

  render() {
    return (
      <StudentView 
        student={this.props.student}
        handleDelete={this.handleDelete} 
        handleEnrollStudent={this.handleEnrollStudent}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
    enrollStudent: (campusId, studentId) =>
    dispatch(enrollStudentThunk(campusId, studentId)),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);