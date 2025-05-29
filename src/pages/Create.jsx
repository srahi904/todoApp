/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { useNavigate } from "react-router-dom";

function Create() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;

    dispatch(addTodo(text));
    setText("");
    naviagte("/");
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-8 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Add New Todo</h2>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter your task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-grow p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Create;
