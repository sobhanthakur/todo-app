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

const initialState = {
  loading: true,
  todos: [],
  priority: [],
};

const todoReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        loading: false,
        todos: [payload, ...state.todos],
      };
    case ADD_PRIORITY_TODO:
      return {
        ...state,
        loading: false,
        priority: [payload, ...state.priority],
      };
    case UPDATE_TODO:
      return {
        ...state,
        loading: false,
        todos: state.todos.map((todo) =>
          todo._id === payload._id
            ? {
                ...todo,
                description: payload.description,
              }
            : todo
        ),
      };
    case UPDATE_PRIORITY_TODO:
      return {
        ...state,
        loading: false,
        priority: state.priority.map((t) =>
          t._id === payload._id
            ? {
                ...t,
                description: payload.description,
              }
            : t
        ),
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== payload),
        loading: false,
      };
    case REMOVE_PRIORITY_TODO:
      return {
        ...state,
        priority: state.priority.filter((t) => t._id !== payload),
        loading: false,
      };
    case REMOVE_ALL_TODO:
    case CLEAR_TODO:
      return {
        ...state,
        priority: [],
        todos: [],
        loading: false,
      };
    case GET_TODO:
      return {
        ...state,
        loading: false,
        todos: payload,
      };
    case GET_PRIORITY_TODO:
      return {
        ...state,
        loading: false,
        priority: payload,
      };
    default:
      return state;
  }
};
export default todoReducer;
