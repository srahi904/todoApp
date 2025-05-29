/** @format */

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { SignIn, SignUp } from "@clerk/clerk-react";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Completed from "./pages/Completed";
import RequireAuth from "./components/RequireAuth";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <RequireAuth>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Home />
              </motion.div>
            </RequireAuth>
          }
        />

        <Route
          path="/create"
          element={
            <RequireAuth>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Create />
              </motion.div>
            </RequireAuth>
          }
        />

        <Route
          path="/completed"
          element={
            <RequireAuth>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Completed />
              </motion.div>
            </RequireAuth>
          }
        />

        <Route
          path="/sign-in/*"
          element={
            <div>
              <SignIn />
            </div>
          }
        />

        <Route
          path="/sign-up/*"
          element={
            <div>
              <SignUp />
            </div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
