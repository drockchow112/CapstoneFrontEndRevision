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
export const fetchSearchThunk = (text) => (dispatch) => {
  console.log( text )
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  //const url=`https://api.barcodelookup.com/v2/products?search=${text}&formatted=y&key=7so7qtxl0qdcu4zfqibc7ywyijlzbq`
  //const url = "https://pokeapi.co/api/v2/pokemon/ditto"
  const url=`https://api.barcodelookup.com/v2/products?search=shoes&formatted=y&key=7so7qtxl0qdcu4zfqibc7ywyijlzbq`
  return axios
    .get(proxyurl+url)
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
