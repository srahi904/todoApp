/** @format */

import { useDispatch, useSelector } from "react-redux";
import Task from "../components/Task";
import { deleteAll } from "../redux/todoSlice";

function Completed() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">
          Completed Task:
        </h2>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          onClick={() => dispatch(deleteAll())}
        >
          Clear All
        </button>
      </div>

      {completedTodos.length === 0 ? (
        <div className="text-center text-slate-600">You have no todos yet.</div>
      ) : (
        <ul>
          {completedTodos.map((todo, index) => (
            <Task key={todo.id} todo={todo} index={index} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Completed;
