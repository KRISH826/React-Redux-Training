/** @format */

// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todo/todoslice";

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});
