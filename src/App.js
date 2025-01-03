import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskManagerPage from "./pages/TaskManagerPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskManagerPage />} />
      </Routes>
    </div>
  );
};

export default App;
