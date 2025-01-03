import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const TaskManagerPage = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.slice(0, 10).map((task) => ({
          id: task.id,
          title: task.title,
          description: `Description for task ${task.id}`,
          status: task.completed ? "Completed" : "Pending",
        }));
        setTasks(formattedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      });
  }, []);

  const addTask = (newTask) =>
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  const updateTask = (updatedTask) =>
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div>
      <h1>Task Manager</h1>
      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <>
          <TaskList
            tasks={tasks}
            onEdit={setEditingTask}
            onDelete={deleteTask}
          />
          <TaskForm
            initialData={editingTask}
            onSubmit={(task) => {
              editingTask ? updateTask(task) : addTask(task);
              setEditingTask(null);
            }}
          />
        </>
      )}
    </div>
  );
};

export default TaskManagerPage;
