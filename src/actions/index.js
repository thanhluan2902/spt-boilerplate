import * as types from './../constants/ActionType';
import * as api from './../api/CallApi';

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

