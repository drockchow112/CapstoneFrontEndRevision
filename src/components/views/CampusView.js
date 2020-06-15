import React from "react";
import "./styles/OneView.css";
import { Link } from "react-router-dom";
import {
  StudentNameListContainer,
  AddStudentToCampusContainer,
} from "../containers";

const CampusView = (props) => {
  return (
    <>
    <div className="card width mx-auto">
    <div className="row no-gutters">
      <div className="col-md-4">
        <img className="card-img"src={props.campus.imageUrl} alt={props.campus.name} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h1 className="card-title">{props.campus.name}</h1>
          <h3 className="card-text"><b>Address: </b>{props.campus.address}</h3>
          <p className="card-text"><b>Description</b>{props.campus.description}</p>
          <p  className="card-text"><button className="btn btn-outline-primary"><Link to={`/campuses/${props.campus.id}/edit`}>Edit</Link></button>  
          <button className="btn btn-outline-danger card-text" onClick={() => props.handleDelete(props.campus.id)}> Delete</button>
          </p>
        </div>
    </div>
  </div>
  </div>
      <AddStudentToCampusContainer
        campusId={props.campus.id}
        handleEnrollStudent={props.handleEnrollStudent}
      />
      <StudentNameListContainer students={props.campus.students} />





    </>
  );
};

export default CampusView;
