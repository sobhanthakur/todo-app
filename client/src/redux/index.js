import { combineReducers } from "redux";
import alertReducer from './reducers/alertReducer'
import authReducer from './reducers/authReducer'
import todoReducer from './reducers/todoReducer'

export default combineReducers({
    alertReducer,
    authReducer,
    todoReducer
});
