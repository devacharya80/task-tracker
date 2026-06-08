// Dashboard.jsx
import { useState } from "react";
import "./dashboard.css";
import TaskCard from "../../components/TaskCard";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description) {
      alert("Please fill in all fields");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      status: "pending",
    };

    setTasks([...tasks, newTask]);

    setFormData({
      title: "",
      description: "",
    });

    setShowForm(false);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "pending"
                  ? "completed"
                  : "pending",
            }
          : task
      )
    );
  };

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>My Tasks</h2>

        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close" : "Add Task"}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="card p-4 mb-4">
          <form onSubmit={handleAddTask}>
            <div className="mb-3">
              <label className="form-label">
                Task Title
              </label>

              <input
                type="text"
                name="title"
                className="form-control"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter task title"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Description
              </label>

              <textarea
                name="description"
                className="form-control"
                rows="3"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter task description"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-success"
            >
              Create Task
            </button>
          </form>
        </div>
      )}

      {/* Tasks */}
      {tasks.length === 0 ? (
        <div className="text-center mt-5">
          <h5>No tasks yet. Add one!</h5>
        </div>
      ) : (
        <div className="row g-4">
          {tasks.map((task) => (
            <div key={task.id} className="col-md-6 col-lg-4">
              <TaskCard
                task={task}
                onDelete={handleDelete}
                onToggle={handleToggle}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;