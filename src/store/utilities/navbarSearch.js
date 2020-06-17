import axios from "axios";

// Action Types
const FETCH_SEARCH = "FETCH_SEARCH";

// Action Creators
const fetchSearch = (search) => {
  return {
    type: FETCH_SEARCH,
    payload: search,
  };
};

// Thunk Creators
export const fetchSearchThunk = () => (dispatch) => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url="https://api.barcodelookup.com/v2/products?search=shoes&formatted=y&key=8d3lkvfc8flbza5fk624936rhbzx8y"
  return axios
    .get(proxyurl+url)
    .then((res) => res.data)
    .then((items) => dispatch(fetchSearch(items)))
    .catch((err) => console.log(err));
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SEARCH:
      console.log(action.payload)
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
