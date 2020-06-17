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
export const fetchSearchThunk = (category, item) => (dispatch) => {
  return axios
    //get request is static for now
    //.get(`https://api.barcodelookup.com/v2/products?category=${category}&search=${item}&formatted=y&key=8d3lkvfc8flbza5fk624936rhbzx8y`)
    .get('https://api.barcodelookup.com/v2/products?search=shoes&formatted=y&key=8d3lkvfc8flbza5fk624936rhbzx8y')
    .then((res) => res.data)
    .then((search) => dispatch(fetchSearch(search)))
    .catch((err) => console.log(err));
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
