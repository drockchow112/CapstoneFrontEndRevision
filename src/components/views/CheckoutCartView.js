import React from "react";

const CheckoutCartView =()=> {

    return (
      <div className="center">
<div className="bg-light">
    <div className="container">
  <div className="py-5 text-center">
    <h2>Checkout</h2>
  </div>

  <div className="row">
    <div className="col-md-4 order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge badge-secondary badge-pill">3</span>
      </h4>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
            <h6 className="my-0">Product name</h6>
            <small className="text-muted">Brief description</small>
          </div>
          <span><button className="btn btn-danger btn-sm">Remove</button></span>
          <span className="text-muted">$12</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Second product</h6>
            <small className="text-muted">Brief description</small>
          </div>
          <span><button className="btn btn-danger btn-sm">Remove</button></span>
          <span className="text-muted">$8</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Third item</h6>
            <small className="text-muted">Brief description</small>
          </div>
          <span><button className="btn btn-danger btn-sm">Remove</button></span>
          <span className="text-muted">$5</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>$25</strong>
        </li>
      </ul>
    </div>
    <div className="col-md-8 order-md-1">
      <h4 className="mb-3">Address</h4>
      <form >
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName">First name</label>
            <input type="text" className="form-control" id="firstName" placeholder=""  required=""/>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName">Last name</label>
            <input type="text" className="form-control" id="lastName" placeholder=""  required=""/>
            <div className="invalid-feedback">
              Valid last name is required.
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <div className="input-group">
            <input type="text" className="form-control" id="username" placeholder="Username" required=""/>
            <div className="invalid-feedback" >
              Your username is required.
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email </label>
          <input type="email" className="form-control" id="email" placeholder="you@example.com" required=""/>
          <div className="invalid-feedback">
            Please enter a valid email address htmlFor shipping updates.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
          <div className="invalid-feedback">
            Please enter your shipping address.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
          <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
        </div>

        <div className="row">
          <div className="col-md-5 mb-3">
            <label htmlFor="country">Country</label>
            <select className="custom-select d-block w-100" id="country" required="">
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="state">State</label>
            <select className="custom-select d-block w-100" id="state" required="">
              <option value="">Choose...</option>
              <option>New York</option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="zip">Zip</label>
            <input type="text" className="form-control" id="zip" placeholder="" required=""/>
            <div className="invalid-feedback">
              Zip code required.
            </div>
          </div>
        </div>
        <h4 className="mb-3">Credit Card</h4>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="cc-name">Name on card</label>
            <input type="text" className="form-control" id="cc-name" placeholder="" required=""/>
            <small className="text-muted">Full name as displayed on card</small>
            <div className="invalid-feedback">
              Name on card is required
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="cc-number">Credit card number</label>
            <input type="text" className="form-control" id="cc-number" placeholder="" required=""/>
            <div className="invalid-feedback">
              Credit card number is required
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-3">
            <label htmlFor="cc-expiration">Expiration</label>
            <input type="text" className="form-control" id="cc-expiration" placeholder="" required=""/>
            <div className="invalid-feedback">
              Expiration date required
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="cc-cvv">CVV</label>
            <input type="text" className="form-control" id="cc-cvv" placeholder="" required=""/>
            <div className="invalid-feedback">
              Security code required
            </div>
          </div>
        </div>
        <hr className="mb-4"/>
        <button className="btn btn-primary btn-lg btn-block" type="submit">Proceed</button>
      </form>
      
    </div>
  </div>
</div>


</div>      </div>
    );
}

export default CheckoutCartView;
