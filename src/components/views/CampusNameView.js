import React from "react";
import "./styles/StudentNameListView.css";
import { Link } from "react-router-dom";

const CampusNameView = (props) => {
  console.log(props);
  if (!props.campus) {
    return <p>student didn't enrolled a campus</p>;
  }
  return (
    <>
      <div>
        <h2>campus</h2>
        <h3>
        <Link to={`/campuses/${props.campus.id}`}>{props.campus.name}</Link>
        </h3>
        {/* <ul className="student">
          {props.campus.map((campus) => (
            <li key={campus.id} className="student-name">
              <Link to={`/campus/${campus.id}`}>{campus.name}</Link>
            </li>
          ))}
        </ul> */}
      </div>
    </>
  );
};

export default CampusNameView;