import React from "react";
import { Link } from "react-router-dom";

const UserView = (props) => {
    console.log(props);
  return (
    <>
    <div className="card width mx-auto">
    <div className="row no-gutters">
      <div className="col-md-4">
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h1 className="card-title">UserName:{props.user.userName}</h1>
          <h3 className="card-text"><b>Email: </b>{props.user.email}</h3>
          <p  className="card-text"><button className="btn btn-outline-primary"><Link to={`/users/${props.user.id}/edit`}>Edit</Link></button>  
          </p>
        </div>
    </div>
  </div>
  </div>





    </>
  );
};

export default UserView;