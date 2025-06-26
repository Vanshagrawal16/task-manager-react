import React, { useState ,useEffect} from "react";
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [deadline, setDeadline] = useState("");



  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([
      ...tasks,
      { text: input, completed: false, deadline: deadline || "No deadline" }
    ]);
    setInput("");
    setDeadline("");
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        fontFamily: "Arial",
        padding: "20px"
      }}
    >
      <h1>📝 Task Manager</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          style={{
            padding: "10px",
            marginRight: "10px",
            width: "200px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task"
        />

        <input
          style={{
            padding: "10px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <button
          onClick={addTask}
          style={{
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Add Task
        </button>
      </div>

      <div>
        {tasks.length === 0 ? (
          <p>No tasks yet. Add one above 👆</p>
        ) : (
          tasks.map((task, index) => (
            <Task
              key={index}
              index={index}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
