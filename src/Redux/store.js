import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import taskReducer from "./Reducers/taskReducer";
import thunk from "redux-thunk";
// import logger from "redux-logger";
import { reducer as formReducer } from "redux-form";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const rootReducer = combineReducers({
  form: formReducer,
  taskManger: taskReducer,
});

export default function store() {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}
