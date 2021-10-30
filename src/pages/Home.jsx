import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TasksView from "../components/TasksView";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasksList") || "[]");
    dispatch({
      type: "SetTasks",
      tasks,
    });
  }, []);
  return (
    <div>
      <TasksView />
    </div>
  );
}

export default Home;
