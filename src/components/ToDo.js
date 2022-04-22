import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

function ToDo({ id, text }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(actionCreators.deleteToDo(id));
  };

  return (
    <li>
      <Link to={`/${id}`}>{text}</Link> <button onClick={onClick}>❌</button>
    </li>
  );
}

export default ToDo;
