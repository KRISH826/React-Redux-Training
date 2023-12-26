/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todo/todoslice";

const Addtodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={handleAddTodo}>
      <div className='flex w-full items-center space-x-2'>
        <input
          className='flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='todo..'></input>
        <button
          type='submit'
          className='rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black w-[120px] h-[40px]'>
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default Addtodo;
