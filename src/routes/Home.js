import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../store";

function Home() {
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
    dispatch(actionCreators.addToDo(text));
    setText("");
  }

  return (
    <>
      <h1>To Dos</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="Write to do"
        />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

export default Home;
