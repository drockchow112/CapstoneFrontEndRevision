import React from "react";
import "./styles/View.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
    console.log("student"+props.allStudents);
  if (!props.allStudents.length) {
    return <div >There are no students</div>;
  }

  return (
    <div >
      <div className=" row row-cols-1 row-cols-md-3">
      {props.allStudents.map((student) => (
        <div key={student.id}  className="col mb-4">
        <div className="card width mx-auto" >
        <img className="card-img-top" src={student.imageUrl} width="200px" alt={student.lastName} />
        <div className="card-body">
           <Link to={`/students/${student.id}`}>
             <h5 className="card-title">{student.firstName} {student.lastName}</h5>
           </Link>
           <p className="card-text"><b>Email:</b> {student.email}</p>
           <p className="card-text"><b>GPA:</b> {student.gpa}</p>
           <p className="card-text"><button className="btn btn-outline-danger" onClick={() => props.handleDelete(student.id)}>Delete</button></p>
        </div>
       </div>
     </div>
      ))}
      </div>
      <Link to="/students/new" className="btn btn-primary btn-lg btn-block">
        New Student
      </Link>
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;
