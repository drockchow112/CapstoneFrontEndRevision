import React from "react";
import "./styles/StudentNameListView.css";
import { Link } from "react-router-dom";

const CampusNameView = (props) => {
  console.log(props);
  if (!props.campus) {
    return <h2>Student didn't enrolled a campus</h2>;
  }
  return (
    <>
      <div>
        <h2>Campus</h2>
        <h3>
        <Link to={`/campuses/${props.campus.id}`}>{props.campus.name}</Link>
        </h3>
      </div>
    </>
  );
};

export default CampusNameView;