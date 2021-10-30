import { createStore } from "redux";

const UserReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case "SetUser": {
      return {
        user: action.user,
      };
    }
    default:
      return state;
  }
};

const userStore = createStore(UserReducer);

export default userStore;
