import { ADDCONTACT, DELETECONTACT } from './types';

export const addNewContact = newContact => ({
  type: ADDCONTACT,
  payload: newContact,
});

export const deleteContactById = id => ({
  type: DELETECONTACT,
  payload: id,
});
