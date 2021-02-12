import { combineReducers } from "redux";
import { reducerTask } from "./reducerTask";

export const rootReducer = combineReducers({
    reducerTask:reducerTask
})