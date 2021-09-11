import * as types from './../constants/ActionType';
import * as api from './../api/CallApi';

// ------------- fetch all work --------------
export const actRequesthWorkApi = () => {
    return (dispatch) => {
        return api.getWorkAll().then(function (response) {
                const data = response.data;
                dispatch(actFectchWorkApi(data));
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}
export const actFectchWorkApi = (works) => {
    return {
        type: types.FETCH_WORK,
        works
    }

}

// --------------------- fetch work detail -------------------
export const actRequesthWorkEditApi = (id) => {
    return (dispatch) => {
        return api.getWorkEdit(id).then(function (response) {
                const data = response.data;
                dispatch(actFectchWorkEditApi(data));
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}
export const actFectchWorkEditApi = (workEdit) => {
    return {
        type: types.FETCH_WORK_EDIT,
        workEdit
    }

}