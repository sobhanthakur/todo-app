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

// Remove Todo
export const removeTodo = (priority, id) => async (dispatch) => {
  try {
    await axios.delete("/api/todo/" + id);

    if (!priority) {
      dispatch({
        type: REMOVE_TODO,
        payload: id,
      });
    } else {
      dispatch({
        type: REMOVE_PRIORITY_TODO,
        payload: id,
      });
    }
    setAlert("Todo Deleted", "success", 4000);
  } catch (err) {
    setAlert("Something went wrong", "danger", 4000);
  }
};

// Update Todo
export const updateTodo = (priority, id, description) => async (dispatch) => {
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    
      const body = JSON.stringify({ description });
    try {
      const res = await axios.put("/api/todo/" + id,body,config);
  
      if (!priority) {
        dispatch({
          type: UPDATE_TODO,
          payload: res.date,
        });
      } else {
        dispatch({
          type: UPDATE_PRIORITY_TODO,
          payload: res.data,
        });
      }
      setAlert("Todo Deleted", "success", 4000);
    } catch (err) {
      setAlert("Something went wrong", "danger", 4000);
    }
  };
