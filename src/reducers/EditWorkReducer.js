import * as types from './../constants/ActionType';

var documentsState = {};

const workEdit = (state = documentsState, action) => {
    switch (action.type) {
        case types.FETCH_WORK_EDIT:
            state = action.workEdit[0];
            return {...state}
        default:
            return {...state}
    }
}

export default workEdit;