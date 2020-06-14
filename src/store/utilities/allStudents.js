import axios from "axios";

// const BASE_URL =
//   "https://cors-anywhere.herokuapp.com/" + "http://localhost:3001";

// ACTION TYPES;
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT";
const EDIT_STUDENT = "EDIT_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";

// ACTION CREATORS;
const fetchAllStudents = (students) => {
  return {
    type: FETCH_ALL_STUDENTS,
    payload: students,
  };
};

const addstudent = (student) => {
  return {
    type: ADD_STUDENT,
    payload: student,
  };
};

const editstudent = (student) => {
  return {
    type: EDIT_STUDENT,
    payload: student,
  };
};

const deletestudent = (id) => {
  return {
    type: DELETE_STUDENT,
    payload: id,
  };
};

// THUNK CREATORS;
export const fetchAllStudentsThunk = () => (dispatch) => {
  return axios
    .get("/api/students")
    .then((res) => res.data)
    .then((students) => dispatch(fetchAllStudents(students)))
    .catch((err) => console.log(err));
};

export const addStudentThunk = (student, ownProps) => (dispatch) => {
  return axios
    .post("/api/students", student)
    .then((res) => res.data)
    .then((newstudent) => {
      dispatch(addstudent(newstudent));
      ownProps.history.push(`/students/${newstudent.id}`);
    })
    .catch((err) => console.log(err));
};

export const editStudentThunk = (id, student) => (dispatch) => {
  return axios
    .put(`/api/students/${id}`, student)
    .then((res) => res.data)
    .then((updatedstudent) => dispatch(editstudent(updatedstudent)))
    .catch((err) => console.log(err));
};

export const deleteStudentThunk = (id) => (dispatch) => {
  return axios
    .delete(`/api/students/${id}`)
    .then((res) => res.data)
    .then(() => dispatch(deletestudent(id)))
    .catch((err) => console.log(err));
};

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_STUDENTS:
      return action.payload;
    case ADD_STUDENT:
      return [...state, action.payload];
    case EDIT_STUDENT:
        return state.map((student) =>
        student.id === action.payload.id ? action.payload : student
      );
    case DELETE_STUDENT:
      console.log(action.payload);
      return state.filter((student) => student.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
