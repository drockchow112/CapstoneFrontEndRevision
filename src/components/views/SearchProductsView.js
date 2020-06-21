import React from "react";
import { Link } from "react-router-dom";

const SearchProductsView = props => {
  if (!props.Products.length) {
    return <form className="form-inline mt-2 mt-md-0" onSubmit={props.handleSubmit}>
    
    
  </form>;
  }

  return (
    <div className="center"> 
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h2 className="display-4">Search Result</h2>
        </div>
      <div className="container">  
      <div className="row row-cols-1 row-cols-md-3" >
      {props.Products.map(product => (
          <div key={product.barcode_number} className="col mb-4">
            <div className=" card h-100 mx-auto">
              <img
                className="card-img-top"
                src={product.images}
                width="150px"
                height="300px"
                alt={product.product_name}
              />
              <div className="card-body">
                <Link to={`/products/${product.barcode_number}`}>
                  <h5 className="card-title">{product.product_name}</h5>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};


export default SearchProductsView;