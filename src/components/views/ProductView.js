import React from "react";
//import { Link } from "react-router-dom";
const UserView = (props) => {
  let storesDisplay;
  let favoriteDisplay;
  //someone login
  if(props.user.id){
    favoriteDisplay=<button className="btn btn-sm btn-success" onClick={props.handleSubmit}> Add to Favorite </button>
  }else{
    favoriteDisplay=null;
  }

  if (props.product.stores) {
    
    storesDisplay = props.product.stores.map((store,id) => (
      <div key={id} >{/**className="col mb-4">**/}
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">${store.store_price}</h4>
        </div>
        <div className="card-body">
          <ul className="list-unstyled mt-3 mb-4">
            <li>
              {store.store_name}
            </li>
          </ul>
          <a href={store.product_url} target="_blank">
            <button type="button" className="btn btn-lg btn-block btn-outline-primary">
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
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Cheapest Prices Found!</h1>
    </div>
    {favoriteDisplay}

    <div className="card">
           
          <div className="card-body">      
            <img 
                src={props.product.images}
                height="150"
                width="150"
                alt={props.product.product_name}
            />
            <h4 className="card-title">{props.product.product_name}</h4>
            <p className="class-text">Description: {props.product.description}</p>
          </div>
    </div>
        
      
      <br></br>
      <br></br>
      <div className="center">

        <h1>Stores:</h1>
        
        <div className="container">
        <div className="card-deck mb-3 text-center">

        {storesDisplay}

        

        </div>

        </div>
      </div>
    </>
  );
};
export default UserView;