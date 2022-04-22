import React, { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
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
      <ul></ul>
    </>
  );
}
