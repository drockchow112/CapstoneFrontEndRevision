import React from "react";
import "./styles/View.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div >There are no campuses</div>;
  }

  return (
    <div>

      <div className=" row row-cols-1 row-cols-md-3">
     
        {props.allCampuses.map((campus) => (
          <div  key={campus.id} className="col mb-4">
           <div className="card width mx-auto" >
           <img className="card-img-top" src={campus.imageUrl} width="200px" alt={campus.name} />
           <div className="card-body">
              <Link to={`/campuses/${campus.id}`}>
                <h5 className="card-title">{campus.name}</h5>
              </Link>
              <p className="card-text"><b>Student Amount</b>: {campus.students.length}</p>
              <p className="card-text"><button className="btn btn-outline-danger" onClick={() => props.handleDelete(campus.id)}>Delete</button></p>
           </div>
          </div>
        </div>
        ))}
      </div>
      <Link to="/campuses/new" className="btn btn-primary btn-lg btn-block">
        New Campus
      </Link>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
