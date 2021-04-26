import * as actions from "../Actions/actions";

const initialState = {
  tasks: [],
  isEdit: false,
  editTask: null,
  error: null,
  isOpen: false,
};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TASK:
      if (state.isEdit) {
        const newTasks = [...state.tasks];
        const indexValue = [...state.tasks].findIndex(
          (task) => task.id === state.editTask.id
        );
        newTasks.splice(indexValue, 1, action.payload);

        return {
          ...state,
          tasks: newTasks,
          isOpen: !state.isOpen,
          isEdit: false,
          editTask: null,
        };
      }
      return {
        ...state,
        tasks: state.tasks.concat(action.payload),
        isOpen: !state.isOpen,
      };
    case actions.COLLAPSE_CARD:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case actions.EDIT_START:
      return {
        ...state,
        isOpen: true,
        editTask: action.payload,
        isEdit: true,
      };
    case actions.CANCEL_ADD_UPDATE:
      return {
        ...state,
        isEdit: false,
        editTask: null,
        isOpen: false,
      };
    case actions.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== state.editTask.id),
        isOpen: false,
        isEdit: false,
        editTask: null,
      };
    default:
      return state;
  }
}
