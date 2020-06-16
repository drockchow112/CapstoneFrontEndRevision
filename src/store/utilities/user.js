import axios from "axios";

// Action Types
const FETCH_USER = "FETCH_USER";

// Action Creators

const fetchUser = (user) => {
  return {
    type: FETCH_USER,
    payload: user,
  };
};

// Thunk Creators
export const fetchUserThunk = (id) => (dispatch) => {
  return axios
    .get(`/api/users/${id}`)
    .then((res) => res.data)
    .then((user) => dispatch(fetchUser(user)))
    .catch((err) => console.log(err));
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
