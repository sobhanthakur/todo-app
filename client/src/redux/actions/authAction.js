import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../types";
import axios from "axios";

import setAuthToken from "../../utils/setAuthToken";

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    // const res = await axios.get("/api/auth");

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
      // errors.data.errors.forEach((error) =>
      //   dispatch(setAlert(error.msg, "danger", 4000))
      // );
    }

    // Dispatch LOGIN_FAIL
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout and clear profiles
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
