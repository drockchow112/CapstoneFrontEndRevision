import React from "react";
import { Link } from "react-router-dom";

const SearchProductsView = props => {
    console.log(props)
  if (!props.Products.length) {
    return <form className="form-inline mt-2 mt-md-0" onSubmit={props.handleSubmit}>
    
    
  </form>;
  }

  return (
    <div className="center"> 
      <div className="container">  
      <div className="card-deck mb-3">
        {props.Products.map(product => (
          <div key={product.barcode_number}>
            <div className="card mb-4 shadow-sm">
            <img className="card-img-top" src={product.images} width="200px" alt={product.product_name} />
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