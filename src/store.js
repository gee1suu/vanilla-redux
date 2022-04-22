import { configureStore } from "@reduxjs/toolkit";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

export const addToDo = (text) => {
  return { type: ADD_TODO, text };
};
export const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
};

const reducer = (state = [""], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = { text: action.text, id: Date.now() };
      return [newToDoObj, ...state];
    case DELETE_TODO:
      const cleaned = state.filter((toDo) => toDo.id !== action.id);
      return cleaned;
    default:
      return state;
  }
};

const store = configureStore({
  reducer: reducer,
});

export default store;
