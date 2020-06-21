import axios from "axios";
const custom = require('./apikey');
const API_KEY=custom.config.API_KEY
// Action Types
const FETCH_PRODUCT = "FETCH_PRODUCT";

// Action Creators

const fetchProduct = (product) => {
  return {
    type: FETCH_PRODUCT,
    payload: product,
  };
};

// Thunk Creators
export const fetchProductThunk = (id) => (dispatch) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url=`https://api.barcodelookup.com/v2/products?barcode=${id}&formatted=y&key=${API_KEY}`
  return axios
    .get(proxyurl+url)
    .then((res) => res.data.products[0])
    .then((product) => dispatch(fetchProduct(product)))
    .catch((err) => console.log(err));
};
// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
