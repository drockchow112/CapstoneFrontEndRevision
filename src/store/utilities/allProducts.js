import axios from "axios";

// Action Types
const FETCH_ALL_PRODUCTS = "FETCH_ALL_PRODUCTS";
const SEARCH_PRODUCTS="SEARCH_PRODUCTS";

// Action Creators
const fetchAllProducts = (product) => {
  return {
    type: FETCH_ALL_PRODUCTS,
    payload: product,
  };
};
const searchProducts=(product)=>{
  return {
    type: SEARCH_PRODUCTS,
    payload: product,
  };
}
// Thunk Creators
export const fetchAllProductsThunk = () => (dispatch) => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url="https://api.barcodelookup.com/v2/products?search=shoes&formatted=y&key=3edb4rpxi9vtcbzl11oyo4cp5kygyx"
  return axios
    .get(proxyurl+url)
    .then((res) => res.data.products)
    .then((items) => dispatch(fetchAllProducts(items)))
    .catch((err) => console.log(err));
};
export const searchProductsThunk = (search, ownProps) => (dispatch) => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url=`https://api.barcodelookup.com/v2/products?search=${Object.values(search)[0]}&formatted=y&key=jroo1h6hg9rji3pm3k1kso7babhcyf`
  return axios
    .get(proxyurl+url)
    .then((res) => res.data.products)
    .then((items) => {

      dispatch(searchProducts(items))
      console.log(ownProps)
      ownProps.history.push("/products");
    })
    .catch((err) => console.log(err));
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      return action.payload;
    case SEARCH_PRODUCTS:
      console.log(action.payload)
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
