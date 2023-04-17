import { filterInitialState } from './initialState';
import { UPDATEFILTER } from './types';

export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case UPDATEFILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
