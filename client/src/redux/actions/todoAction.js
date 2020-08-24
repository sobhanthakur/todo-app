import {
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  REMOVE_ALL_TODO,
  GET_TODO,
  ADD_PRIORITY_TODO,
  UPDATE_PRIORITY_TODO,
  REMOVE_PRIORITY_TODO,
  CLEAR_TODO,
  GET_PRIORITY_TODO,
} from "../types";
import axios from "axios";

import { setAlert } from "./alertAction";

// Load Todos
export const getTodos = (priority = false) => async (dispatch) => {
  try {
    const res = await axios.get("/api/todo/" + priority);

    if (!priority) {
      dispatch({
        type: GET_TODO,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_PRIORITY_TODO,
        payload: res.data,
      });
    }
  } catch (err) {
    setAlert("Something went wrong", "danger", 4000);
  }
};
