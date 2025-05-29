/** @format */

import { useSelector } from "react-redux";
import Task from "../components/Task";

function Home() {
  const todos = useSelector((state) => state.todo.todos);

  const incompleteTodos = todos.filter((todo) => !todo.completed);
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl text-slate-700 font-bold mb-4 text-center">
        Your Remaining Tasks:
      </h2>

      {incompleteTodos.length === 0 ? (
        <div className="text-center text-slate-600">You have no todos yet.</div>
      ) : (
        <ul>
          {incompleteTodos.map((todo, index) => (
            <Task key={todo.id} todo={todo} index={index} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
