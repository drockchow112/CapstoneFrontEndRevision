import React from "react";
//import { Link } from "react-router-dom";
const UserView = (props) => {
  console.log(props);
  console.log(props.product.stores);

  let storesDisplay;

  if (props.product.stores) {
    storesDisplay = props.product.stores.map((store,id) => (
      <div key={id} className="col mb-4">
        <div className="card width mx-100px">
          <div className="card-body">
              <h5 className="card-title">{store.store_name}</h5>
            <div className="card-text">
              <div>Price: ${store.store_price}</div>
              <a href={store.product_url}>link</a>
            </div>
          </div>
        </div>
      </div>
    ));
  } else {
    storesDisplay = null;
  }
  return (
    <>
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Cheapest Prices Found!</h1>
    </div>
      <div className="card width mx-auto">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              className="card-img-top"
              src={props.product.images}
              width="200px"
              alt={props.product.product_name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{props.product.product_name}</h1>
​
              <h3 className="card-text">
                <b>Description: </b>
                {props.product.description}
              </h3>
              
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <h1>Stores:</h1>
      {storesDisplay}
    </>
  );
};
export default UserView;