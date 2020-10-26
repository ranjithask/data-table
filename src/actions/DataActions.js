import * as types from '../constants/actionTypes';
import { photoService } from '../services/DataService';

export const getData = (_start, _limit) => {
  return async function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    const { data } = await photoService(_start, _limit);
    return dispatch({
      type: types.GET_DATA,
      data
    });
  }
}
