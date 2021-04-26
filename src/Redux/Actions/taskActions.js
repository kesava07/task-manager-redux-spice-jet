import { initialize } from "redux-form";
import * as actions from "./actions";

export const addTask = (payload) => (dispatch) => {
  console.log(payload);
  dispatch({
    type: actions.ADD_TASK,
    payload,
  });

  dispatch(
    initialize("tasks", {
      taskDescription: "",
      date: "",
      time: "",
      assignUser: "",
    })
  );
};

export const editTaskStart = (payload) => (dispatch) => {
  dispatch({
    type: actions.EDIT_START,
    payload,
  });
  dispatch(initialize("tasks", payload));
};

export const cancelAddOrUpdate = () => (dispatch) => {
  dispatch(
    initialize("tasks", {
      taskDescription: "",
      date: "",
      time: "",
      assignUser: "",
    })
  );
  dispatch({
    type: actions.CANCEL_ADD_UPDATE,
  });
};

export const deleteTask = () => (dispatch) => {
  dispatch({
    type: actions.DELETE_TASK,
  });
  dispatch(
    initialize("tasks", {
      taskDescription: "",
      date: "",
      time: "",
      assignUser: "",
    })
  );
};

export const toggleIsOpen = () => ({
  type: actions.COLLAPSE_CARD,
});
