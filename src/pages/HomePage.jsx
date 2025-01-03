import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 className="task-title"><i><b>Welcome to Task Manager</b></i></h1>
      <Link to="/tasks">
        <button className="task-button">Go to Task Manager</button>
      </Link>
    </div>
  );
};

export default HomePage;
