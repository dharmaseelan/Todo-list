import { createStore } from "redux";

const updateLocalStorage = (newTasksList) => {
  localStorage.setItem("tasksList", JSON.stringify(newTasksList));
};

const getLoggedUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const saveUser = (newUser) => {
  localStorage.setItem("user", JSON.stringify(newUser));
};

const StoreReducer = (
  state = { user: getLoggedUser(), tasksList: [] },
  action
) => {
  switch (action.type) {
    case "LoginUser": {
      saveUser(action.user);
      return {
        ...state,
        user: action.user,
      };
    }
    case "LogoutUser": {
      localStorage.removeItem("user");
      return {
        ...state,
        user: null,
      };
    }
    case "SetTasks": {
      return { ...state, tasksList: action.tasks };
    }
    case "AddTask": {
      const newTasksList = [...state.tasksList, action.task];
      updateLocalStorage(newTasksList);
      return { ...state, tasksList: newTasksList };
    }
    case "RemoveTask": {
      const newTasksList = state.tasksList.filter(
        (task, index) => index !== action.targetIndex
      );
      updateLocalStorage(newTasksList);
      return { ...state, tasksList: newTasksList };
    }
    case "CheckTask": {
      let newTasksList = state.tasksList.slice();
      newTasksList[action.targetIndex].checked = action.isChecked;
      updateLocalStorage(newTasksList);
      return { ...state, tasksList: newTasksList };
    }
    default:
      return state;
  }
};

const store = createStore(StoreReducer);

export default store;
