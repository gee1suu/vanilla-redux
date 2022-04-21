import { configureStore } from "@reduxjs/toolkit";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0) => {
  return count;
};

const countStore = configureStore({
  reducer: countModifier,
});

console.log(countStore.getState());
