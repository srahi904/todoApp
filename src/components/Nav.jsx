/** @format */

import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

function Nav() {
  return (
    <nav className="flex justify-between items-center gap-4 bg-blue-100 p-5 min-w-96">
      <div>
        <h1 className="text-2xl font-bold">Todo App</h1>
      </div>
      <div>
        <ul className="flex gap-4">
          <li>
            <Link className="text-blue-600 font-semibold" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-blue-600 font-semibold" to="/create">
              Create
            </Link>
          </li>
          <li>
            <Link className="text-blue-600 font-semibold" to="/completed">
              Completed
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-4 items-center">
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </nav>
  );
}

export default Nav;
