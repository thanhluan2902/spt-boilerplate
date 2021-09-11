import { combineReducers } from "redux";
import works from './WorkReducers';

const myReducers = combineReducers({
    works,
});

export default myReducers;