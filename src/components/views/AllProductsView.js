import React from "react";
import { Link } from "react-router-dom";

const AllProductsView = props => {
  //console.log(props)
  if (!props.allProducts.length) {
    return <div>There are no items</div>;
  }

  return (
    <div>
      <div className=" row row-cols-5">
        {props.allProducts.map(product => (
          <div key={product.barcode_number} className="col mb-4">
            <div className="card width mx-auto">
              <img
                className="card-img-top"
                src={product.images}
                width="200px"
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
  );
};

// AllProductsView.propTypes = {
//   allProducts: PropTypes.array.isRequired
// };

export default AllProductsView;
