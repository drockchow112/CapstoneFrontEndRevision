import React from "react";
import "./styles/StudentNameListView.css";
import { Link } from "react-router-dom";

const StudentNameListView = (props) => {
  console.log(props);
  if (!props.students) {
    return <p>There are no students enrolled</p>;
  }
  return (
    <>
      <div>
        <br/>
        <h2><b>Students Amount: </b>{props.students.length} </h2>
        <div className=" row row-cols-1 row-cols-md-5">
          {props.students.map((student) => (
            <div key={student.id}  className="col mb-4">
            <div className="card width mx-auto" >
            <img className="card-img-top" src={student.imageUrl} width="200px" alt={student.lastName} />
            <div className="card-body">
               <Link to={`/students/${student.id}`}>
                 <h5 className="card-title">{student.firstName} {student.lastName}</h5>
               </Link>
            </div>
           </div>
         </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StudentNameListView;
