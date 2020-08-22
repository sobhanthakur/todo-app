import { combineReducers } from "redux";
import alertReducer from './reducers/alertReducer'
import authReducer from './reducers/authReducer'

export default combineReducers({
    alertReducer,
    authReducer,
});
