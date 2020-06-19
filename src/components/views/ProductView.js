import React from "react";
//import { Link } from "react-router-dom";
const UserView = (props) => {
  console.log(props);
  console.log(props.product.stores);

  let storesDisplay;

  if (props.product.stores) {
    
    storesDisplay = props.product.stores.map((store,id) => (
      <div key={id} >{/**className="col mb-4">**/}
      <div class="card mb-4 shadow-sm">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">${store.store_price}</h4>
        </div>
        <div class="card-body">
          <ul class="list-unstyled mt-3 mb-4">
            <li>
              {store.store_name}
            </li>
          </ul>
          <a href={store.product_url} target="_blank">
            <button type="button" class="btn btn-lg btn-block btn-outline-primary">
                  Go to store
            </button>
          </a>
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

    <div class="card">
           
          <div class="card-body">      
            <img 
                src={props.product.images}
                height="150"
                width="150"
                alt={props.product.product_name}
            />
            <h4 class="card-title">{props.product.product_name}</h4>
            <p class="class-text">Description: {props.product.description}</p>
          </div>
    </div>
        
      
      <br></br>
      <br></br>
      <div class="center">

        <h1>Stores:</h1>
        
        <div class="container">
        <div class="card-deck mb-3 text-center">

        {storesDisplay}

        

        </div>

        </div>
      </div>
    </>
  );
};
export default UserView;