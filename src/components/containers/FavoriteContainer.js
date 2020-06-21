import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllItemsThunk, deleteItemThunk } from "../../thunks";
import { Link } from "react-router-dom";

// Smart container;
class FavoriteContainer extends Component {
  componentDidMount() {
    this.props.fetchAllItems();
  }

  render() {
    if(!this.props.user.id){
      return <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h2 className="display-4">You Haven't Login Yet</h2>
        </div>
        <button className="btn btn-outline-primary"><Link to="/login">Login</Link></button>
        </div>
    }
    if (!this.props.allItems.length) {
      return <div>There are no items</div>;
    }
    return (
      <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h2 className="display-4">Favorite</h2>
        </div>
      <div className="container">  
      <div className=" row row-cols-1 row-cols-md-3">
        {this.props.allItems
        .filter((i) => i.userId === this.props.user.id)
        .map(item => (
          <div key={item.id} className="col mb-4">
            <div className="card h-100 mx-auto">
            <img 
              className="card-img-top" 
              src={item.imageUrl} 
              width="150px" 
              height="300px"
              alt={item.name} 
            />
              <div className="card-body">
                <Link to={`/products/${item.barcode}`}>

                  <h5 className="card-title">{item.name}</h5>
                </Link>
                <p className="card-text">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => this.props.deleteItem(item.id)}
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
    </div>
    );
  }
}
// Map state to props;
const mapState = (state) => {
  return {
    user:state.user,
    allItems: state.allItems,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllItems: () => dispatch(fetchAllItemsThunk()),
    deleteItem: (id) => dispatch(deleteItemThunk(id)),
  };
};

// Type check props;
FavoriteContainer.propTypes = {
  allItems: PropTypes.array.isRequired,
  fetchAllItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(FavoriteContainer);