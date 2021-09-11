import * as url from './url';
import axios from 'axios';

export const getWorkAll = () => {
    return axios.get(url.WORK_LIST_URL);
}

export const getWorkEdit = (id) => {
    return axios.get(`${url.WORK_LIST_URL}?homework_item_id=${id}`);
}