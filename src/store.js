import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: JSON.parse(localStorage.getItem("todo")),
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
      localStorage.setItem("todo", JSON.stringify(state));
    },
    remove: (state, action) => {
      const newState = state.filter((toDo) => toDo.id !== action.payload);
      localStorage.setItem("todo", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
