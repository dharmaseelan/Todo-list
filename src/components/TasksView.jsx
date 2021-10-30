import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Masonry from "react-masonry-css";
import NewTaskMenu from "./NewTaskMenu";
import Task from "./Task";
import AddIcon from "../svg/AddIcon";

function TasksView() {
  const dispatch = useDispatch();
  const [creating, setCreating] = useState(false);
  const tasksList = useSelector((state) => state.tasksList);

  const onTaskAddClick = () => {
    setCreating(!creating);
  };

  const onTaskCreate = (newTask) => {
    dispatch({
      type: "AddTask",
      task: newTask,
    });
    setCreating(false);
  };

  const breakpoints = {
    default: 2,
    991: 1,
  };

  return (
    <div className="container">
      <div className="task-wrapper">
        <h4 className="mb-3 animate__animated animate__fadeIn">Todo List</h4>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {tasksList.map((task, index) => (
            <Task label={task.label} checked={task.checked} index={index} />
          ))}
        </Masonry>
        <div className={`add-button ${creating ? "creating" : ""}`}>
          <button onClick={onTaskAddClick}>
            <AddIcon />
          </button>
        </div>
        {creating && <NewTaskMenu onTaskCreate={onTaskCreate} />}
      </div>
    </div>
  );
}

export default TasksView;
