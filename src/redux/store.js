/** @format */
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { loadState, saveState } from "../utility/localStorage";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },

  preloadedState: {
    todo: preloadedState?.todo || { todos: [] },
  },
});

store.subscribe(() =>
  saveState({
    todo: store.getState().todo,
  })
);
