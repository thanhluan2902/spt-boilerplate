import { combineReducers } from "redux";
import works from './WorkReducers';
import workEdit from './EditWorkReducer';

const myReducers = combineReducers({
    works,
    workEdit
});

export default myReducers;