import { UPDATEFILTER } from './types';

export const updateFilterValue = value => ({
  type: UPDATEFILTER,
  payload: value,
});
