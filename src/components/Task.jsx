/** @format */

import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/todoSlice";
import { motion } from "framer-motion";

function Task({ todo, index }) {
  const dispatch = useDispatch();

  function getTodayDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    return `${day}-${month}-${year}`;
  }

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="flex justify-between items-center p-4 border rounded shadow-sm bg-white"
    >
      <div className="flex justify-between items-center gap-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <p
          className={`text-xl ${
            todo.completed ? "line-through text-slate-600" : ""
          }`}
        >
          <span className="text-base">{index + 1}.</span> {todo.text}
          <span className="text-sm text-slate-600 ml-5">{`(${getTodayDate()})`}</span>
        </p>
      </div>
      <div className="flex gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="text-sm px-3 py-1 bg-red-600 text-white rounded"
        >
          Delete
        </motion.button>
      </div>
    </motion.li>
  );
}

export default Task;
