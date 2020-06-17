import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllItemsView = props => {
    console.log(props)
  if (!props.allItems.length) {
    return <div>There are no items</div>;
  }

  return (
    <div>
      <div className=" row row-cols-1 row-cols-md-3">
        {props.allItems.map(item => (
          <div key={item.id} className="col mb-4">
            <div className="card width mx-auto">
            <img className="card-img-top" src={item.imageUrl} width="200px" alt={item.name} />
              <div className="card-body">
                <Link to={`/items/${item.id}`}>
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
        ))}
      </div>
    </div>
  );
};

AllItemsView.propTypes = {
  allItems: PropTypes.array.isRequired
};

export default AllItemsView;
