import { GET_DATA, DELETE_DATA } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import cloneDeep from 'lodash/cloneDeep';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function DataReducer(state = initialState.data, action) {

  let newState = cloneDeep(state);
  let index = -1;
  let { row  } = action;
  switch (action.type) {
    case GET_DATA:
      return objectAssign({}, state, { photos: action.data });
    case DELETE_DATA:
      newState.photos.forEach((state, i) => {
        if (state.id === row.id && state.albumId === row.albumId)
          index = i;
      });
      if (index !== -1)
        newState.photos.splice(index, 1);
      return newState;
    default:
      return newState;
  }
}
