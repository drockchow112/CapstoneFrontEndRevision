import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles/AllUsersView.css";

const AllUsersView = props => {
  if (!props.allUsers.length) {
    return <div>There are no user</div>;
  }

  return (
    <div>
      <div className=" row row-cols-1 row-cols-md-3">
        {props.allUsers.map(user => (
          <div key={user.id} className="col mb-4">
            <div className="card width mx-auto">
              <div className="card-body">
                <Link to={`/campuses/${user.id}`}>
                  <h5 className="card-title">{user.userName}</h5>
                </Link>
                <p className="card-text">
                  <b>Carts Amount</b>: {user.items.length}
                </p>
                <p className="card-text">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => props.handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

AllUsersView.propTypes = {
  allUsers: PropTypes.array.isRequired
};

export default AllUsersView;
