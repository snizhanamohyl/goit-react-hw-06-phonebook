import { reducer } from './reducer';
// import { initialState } from './initialState';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({ reducer });

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'addContact':
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     case 'deleteContact':
//       return {
//         ...state,
//         contacts: [
//           ...state.contacts.filter(contact => contact.id !== action.payload),
//         ],
//       };
//     case 'updateFilter':
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// store.dispatch({
//   type: 'addContact',
//   payload: { id: 'iwegwgpg', name: 'apigjg', number: '090-980-08' },
// });

// console.log(store.getState());

// store.dispatch({
//   type: 'deleteContact',
//   payload: 'iwegwgpg',
// });

// console.log(store.getState());

// store.dispatch({
//   type: 'updateFilter',
//   payload: 'iwegw',
// });

// console.log(store.getState());
