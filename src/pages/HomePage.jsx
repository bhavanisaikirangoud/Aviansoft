import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to Task Manager</h1>
      <Link to="/tasks">
        <button>Go to Task Manager</button>
      </Link>
    </div>
  );
};

export default HomePage;
