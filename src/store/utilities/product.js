import axios from "axios";

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
    const url=`https://api.barcodelookup.com/v2/products?barcode=${id}&formatted=y&key=5r1upgmsjfs59ofc7a47pgei2fuvuu`
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
