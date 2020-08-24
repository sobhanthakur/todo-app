import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  CLEAR_TODO
} from "../types";
import axios from "axios";

import setAuthToken from "../../utils/setAuthToken";
import { setAlert } from "./alertAction";

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/users");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// LOGIN User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/users/login", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    // Show Alert
    const errors = err.response;
    if (errors) {
      errors.data.errors.forEach((error) =>
        dispatch(setAlert(error.msg, "danger", 4000))
      );
    }

    // Dispatch LOGIN_FAIL
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout and clear everything
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });

  dispatch({
    type: CLEAR_TODO,
  });
};


// Register User
export const register = (payload) => async (dispatch) => {


  try {
    const res = await axios.post("/api/users/register", payload);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    // Show Alert
    const errors = err.response;
    if (errors) {
      errors.data.errors.forEach((error) =>
        dispatch(setAlert(error.msg, "danger", 4000))
      );
    }

    // Dispatch REGISTER_FAIL
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};