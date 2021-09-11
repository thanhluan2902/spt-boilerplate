import * as types from './../constants/ActionType';

var documentsState = [];

const works = (state = documentsState, action) => {
    switch (action.type) {
        case types.FETCH_WORK:
            state = action.works;
            return [...state];
        default:
            return [...state];
    }
}

export default works;