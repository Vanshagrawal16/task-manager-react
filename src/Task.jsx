import React from "react";

function Task({ task, index, toggleTask, deleteTask }) {
  return (
    <div
      style={{
        marginBottom: "15px",
        padding: "10px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        width: "300px",
        margin: "10px auto",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      <p
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "#6c757d" : "#333",
          fontWeight: "bold"
        }}
      >
        {task.text}
      </p>

      <p style={{ fontSize: "14px", margin: "5px 0", color: "#555" }}>
        📅 Deadline: {task.deadline}
      </p>

      <div>
        <button
          onClick={() => toggleTask(index)}
          style={{
            marginRight: "10px",
            backgroundColor: task.completed ? "#ffc107" : "#28a745",
            color: "white",
            border: "none",
            padding: "6px 10px",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          onClick={() => deleteTask(index)}
          style={{
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            padding: "6px 10px",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
