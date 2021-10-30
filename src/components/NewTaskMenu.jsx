import React, { useState } from "react";

export default function NewTaskMenu({ onTaskCreate }) {
  const [taskLabel, setTaskLabel] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onTaskCreate({
      label: taskLabel,
      checked: false,
    });
  };

  return (
    <div className="add-task animate__animated animate__fadeIn">
      <form onSubmit={onSubmit}>
        <h6 className="m-0">Creating new task</h6>
        <input
          type="text"
          placeholder="Enter a task"
          value={taskLabel}
          onChange={({ target }) => setTaskLabel(target.value)}
        />
        <div className="btn-wrapper">
          <button className="btn-primary" type="submit" disabled={!taskLabel}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
