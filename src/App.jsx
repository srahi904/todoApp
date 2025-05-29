/** @format */

import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import AnimatedRoutes from "./AnimatedRoutes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Todo App";
  }, []);

  return (
    <Router>
      <div className="max-w-full mx-auto">
        <div>
          <Nav />
          <AnimatedRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
