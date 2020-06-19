import React from "react";
import { Link } from "react-router-dom";

const SearchProductsView = props => {
    console.log(props)
  if (!props.Products.length) {
    return <form className="form-inline mt-2 mt-md-0" onSubmit={props.handleSubmit}>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <input
      value={props.search}
      name="search"
      onChange={props.handleChange}
      className="form-control mr-sm-2"
      type="text"
      placeholder="Search"
      aria-label="Search"
    ></input>
    <button
      className="btn btn-outline-light my-2 my-sm-0 bg-primary"
      type="submit"
    >
      Search
    </button>
  </form>;
  }

  return (
    <div>
        <form className="form-inline mt-2 mt-md-0" onSubmit={props.handleSubmit}>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <input
      value={props.search}
      name="search"
      onChange={props.handleChange}
      className="form-control mr-sm-2"
      type="text"
      placeholder="Search"
      aria-label="Search"
    ></input>
    <button
      className="btn btn-outline-light my-2 my-sm-0 bg-primary"
      type="submit"
    >
      Search
    </button>
  </form>
      <div className=" row row-cols-1 row-cols-md-3">
        {props.Products.map(product => (
          <div key={product.barcode_number} className="col mb-4">
            <div className="card width mx-auto">
            <img className="card-img-top" src={product.images} width="200px" alt={product.product_name} />
              <div className="card-body">
                <Link to={`/products/${product.barcode_number}`}>

                  <h5 className="card-title">{product.product_name}</h5>
                </Link>
                <p className="card-text">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => props.handleDelete(product.barcode_number)}
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


export default SearchProductsView;