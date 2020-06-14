import React from "react";
import "./styles/AllCampusesView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <div className="all-campuses">There are no students</div>;
  }

  return (
    <div className="all-campuses">
      {props.allStudents.map((student) => (
        <div key={student.id}>
          <Link to={`/students/${student.id}`}>
            <h1>{student.firstName}</h1>
          </Link>
          {/* <img src={student.imageUrl} width="200px" alt={student.name} /> */}
          <p>{student.campusId.length} campus</p>
          <button onClick={() => props.handleDelete(student.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;
