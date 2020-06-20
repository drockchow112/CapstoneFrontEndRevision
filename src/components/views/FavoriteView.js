import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FavoriteView = props => {
    console.log(props)
  if(!props.user.id){
    return <div>
      <div>Login first</div>
      <Link to="/login">Login</Link>
      </div>
  }
  if (!props.allItems.length) {
    return <div>There are no items</div>;
  }
  // {this.props.allStudents
  //   .filter((s) => s.campusId !== this.props.campusId)
  //   .map((student) => {
  //     return (
  //       <option value={student.id} key={student.id}>
  //         {student.firstName}
  //       </option>
  //     );
  //   })}
  return (
    <div>
      <div className=" row row-cols-1 row-cols-md-3">
        {this.props.allItems
        .filter((i) => i.userId === this.props.user.id)
        .map(item => (
          <div key={item.id} className="col mb-4">
            <div className="card width mx-auto">
            <img className="card-img-top" src={item.imageUrl} width="200px" alt={item.name} />
              <div className="card-body">
                <Link to={`/products/${item.barcode}`}>

                  <h5 className="card-title">{item.name}</h5>
                </Link>
                <p className="card-text">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => props.handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </p>
              </div>
            </div>

          </div>
        ))
        }
      </div>
    </div>
  );
};

FavoriteView.propTypes = {
  allItems: PropTypes.array.isRequired
};

export default FavoriteView;
