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
  console.log(id)
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url=`https://api.barcodelookup.com/v2/products?barcode=${id}&formatted=y&key=3edb4rpxi9vtcbzl11oyo4cp5kygyx`
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
        console.log(action.payload)
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
