import axios from "axios";

// Action Types
const FETCH_ALL_PRODUCTS = "FETCH_ALL_PRODUCTS";

// Action Creators
const fetchAllProducts = (search) => {
  return {
    type: FETCH_ALL_PRODUCTS,
    payload: search,
  };
};

// Thunk Creators
export const fetchAllProductsThunk = () => (dispatch) => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url="https://api.barcodelookup.com/v2/products?search=shoes&formatted=y&key=jroo1h6hg9rji3pm3k1kso7babhcyf"
  return axios
    .get(proxyurl+url)
    .then((res) => res.data.products)
    .then((items) => dispatch(fetchAllProducts(items)))
    .catch((err) => console.log(err));
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;