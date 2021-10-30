import React from "react";
import RemoveIcon from "../svg/RemoveIcon";
import { useDispatch } from "react-redux";

export default function Task({ label, checked, onChange, index }) {
  const dispatch = useDispatch();
  const onTaskCheck = ({ target }) => {
    dispatch({
      type: "CheckTask",
      targetIndex: index,
      isChecked: target.checked,
    });
  };

  const onTaskRemove = (targetIndex) => {
    dispatch({
      type: "RemoveTask",
      targetIndex: index,
    });
  };

  return (
    <div className="task-list animate__animated animate__fadeIn">
      <div className="task-card">
        <input
          type="checkbox"
          className="checktask"
          defaultChecked={checked}
          onChange={onTaskCheck}
        />
        <div className="content">{label}</div>
        <button className="delete-icon" onClick={onTaskRemove}>
          <RemoveIcon />
        </button>
      </div>
    </div>
  );
}
