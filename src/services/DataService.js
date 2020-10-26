import axios from 'axios';
import { PHOTO_URL, PHOTO_PAGE } from '../constants/urlTypes';

export const photoService = async (_start = 0, _limit = 5) => {
    const url = `${PHOTO_URL}${PHOTO_PAGE}?_start=${_start}&_limit=${_limit}`;
    const data = await axios.get(url);
    return data;
}