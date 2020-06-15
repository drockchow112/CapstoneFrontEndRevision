import React from "react";
import "./styles/OneView.css";
import { Link } from "react-router-dom";
import { 
  CampusNameContainer,
  AddCampusToStudentContainer,
} from "../containers";

const StudentView = (props) => {
  console.log(props.student)
  return (
    <>
    <CampusNameContainer campus={props.student.campus} />
    <div className="card width mx-auto">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img className="card-img"src={props.student.imageUrl} alt={props.student.firstname} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">{props.student.firstName} {props.student.lastName}</h1>
            <h3 className="card-text"><b>Email: </b>{props.student.email}</h3>
            <p className="card-text"><b>GPA: </b>{props.student.gpa}</p>
            <p  className="card-text"><button className="btn btn-outline-primary"><Link to={`/students/${props.student.id}/edit`}>Edit</Link></button>  
            <button className="btn btn-outline-danger card-text" onClick={() => props.handleDelete(props.student.id)}> Delete</button>
            </p>
          </div>
      </div>
    </div>
    </div>
    <AddCampusToStudentContainer
        studentId={props.student.id}
        handleEnrollStudent={props.handleEnrollStudent}
      />


    </>
  );
};

export default StudentView;