import * as url from './url';
import axios from 'axios';

export const getWorkAll = () => {
    return axios.get(url.WORK_LIST_URL);
}