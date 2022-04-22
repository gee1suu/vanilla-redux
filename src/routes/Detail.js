import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { remove } from "../store";

function Detail() {
  const myId = useParams();
  const toDos = useSelector((state) => state);
  const toDo = toDos.find((toDo) => toDo.id === parseInt(myId.id));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClick = () => {
    dispatch(remove(toDo?.id));
    navigate("/");
  };

  return (
    <>
      <h1>
        {toDo?.text}
        <button onClick={onClick}>❌</button>
      </h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

export default Detail;
