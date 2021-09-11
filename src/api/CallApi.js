import * as url from './url';

export const getWorkAll = () => {
    return axios.get(url.WORK_LIST_URL);
}