/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
      toast.success("Task added!");
    },

    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
        toast.info(
          todo.completed ? "Marked as completed" : "Marked as active "
        );
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      toast.error("Task deleted!");
    },
    deleteAll: (state) => {
      state.todos = [];
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, deleteAll } = todoSlice.actions;
export default todoSlice.reducer;
