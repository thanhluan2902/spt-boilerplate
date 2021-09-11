import * as types from './../constants/ActionType';
import * as api from './../api/CallApi';

export const actRequesthWorkApi = () => {
    return (dispatch) => {
        return api.getWorkAll().then(function (response) {
                const data = response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
}
export const actFectchWorkApi = () => {
    return {
        type: types.FETCH_WORK,
        works
    }

}

