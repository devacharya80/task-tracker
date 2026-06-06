
// TaskBar.jsx
function TaskCard({ task, onDelete, onToggle }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <h5 className="card-title">{task.title}</h5>

          <span
            className={`badge ${
              task.status === "completed"
                ? "bg-success"
                : "bg-warning text-dark"
            }`}
          >
            {task.status === "completed"
              ? "Completed"
              : "Pending"}
          </span>
        </div>

        <p className="card-text">
          {task.description}
        </p>

        <div className="d-flex gap-2 mt-3">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => onToggle(task.id)}
          >
            Toggle Status
          </button>

          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;