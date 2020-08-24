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

import setAuthToken from "../../utils/setAuthToken";
import { setAlert } from "./alertAction";

// Load Todos
export const getTodos = (priority = false) => async (dispatch) => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
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
    dispatch(setAlert("Something went wrong", "danger", 4000));
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
    dispatch(setAlert("Todo Deleted", "success", 4000));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger", 4000));
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
    const res = await axios.put("/api/todo/" + id, body, config);

    if (!priority) {
      dispatch({
        type: UPDATE_TODO,
        payload: res.data,
      });
    } else {
      dispatch({
        type: UPDATE_PRIORITY_TODO,
        payload: res.data,
      });
    }
    dispatch(setAlert("Todo Deleted", "success", 4000));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger", 4000));
  }
};

// add Todo
export const addTodo = (priority, payload) => async (dispatch) => {
  try {
    const res = await axios.post("/api/todo/", payload);

    if (!priority) {
      dispatch({
        type: ADD_TODO,
        payload: res.data,
      });
    } else {
      dispatch({
        type: ADD_PRIORITY_TODO,
        payload: res.data,
      });
    }
    dispatch(setAlert("Todo added", "success", 4000));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger", 4000));
  }
};

export const removeAllTodo = () => async (dispatch) => {
  try {
    await axios.delete("/api/todo/");

    dispatch({
      type: REMOVE_ALL_TODO,
    });

    dispatch(setAlert("Todo Deleted", "success", 4000));
  } catch (err) {
    dispatch(setAlert("Something went wrong", "danger", 4000));
  }
};
