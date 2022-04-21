import { configureStore } from "@reduxjs/toolkit";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    return ++count;
  } else if (action.type === "MINUS") {
    return --count;
  } else {
    return count;
  }
};

const countStore = configureStore({
  reducer: countModifier,
});

countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());
