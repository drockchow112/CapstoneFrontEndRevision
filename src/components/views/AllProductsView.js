import React from "react";
import { Link } from "react-router-dom";

const AllProductsView = props => {
  //console.log(props)
  if (!props.allProducts.length) {
    return <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 className="display-4">Loading...</h1>
  </div>
  }

  return (
    <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h2 className="display-4">Products</h2>
        </div>
      <div className="container">  
      <div className="row row-cols-1 row-cols-md-3">
        {props.allProducts.map(product => (
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


export default AllProductsView;