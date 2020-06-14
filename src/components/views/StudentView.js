import React from "react";
import "./styles/CampusView.css";
import { Link } from "react-router-dom";
import { CampusNameContainer } from "../containers";

const StudentView = (props) => {
  console.log(props.student)
  return (
    <>
      <img src={props.student.imageUrl} alt={props.student.firstname} />
      <h1>{props.student.firstName} {props.student.lastName} </h1>
      <h3>{props.student.email}</h3>

      <p>{props.student.gpa}</p>

      <CampusNameContainer campus={props.student.campus} />

      <Link className="edit-link" to={`/students/${props.student.id}/edit`}>
        Edit
      </Link>
      <button onClick={() => props.handleDelete(props.student.id)}>
        Delete
      </button>
    </>
  );
};

export default StudentView;