import { configureStore, createAction } from "@reduxjs/toolkit";

const addToDo = createAction("ADD_TODO");
const deleteToDo = createAction("DELETE_TODO");

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      const newToDoObj = { text: action.payload, id: Date.now() };
      return [newToDoObj, ...state];
    case deleteToDo.type:
      const cleaned = state.filter((toDo) => toDo.id !== action.payload);
      return cleaned;
    default:
      return state;
  }
};

const store = configureStore({
  reducer: reducer,
});

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
