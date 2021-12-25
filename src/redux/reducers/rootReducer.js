import { combineReducers } from "redux";
import userReducer from './userReducer';
import equipmentReducer from "./equipmentReducer";

const rootReducer = combineReducers({
    user: userReducer,
    equipment: equipmentReducer
})

export default rootReducer;
