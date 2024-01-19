import { createSlice } from '@reduxjs/toolkit';

// Create a slice of the Redux store
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },
  reducers: {
      //  Reducer for adding a new contact
    addContact: (state, action) => {
      //  Check if a contact with the same name already exists
      const doesExist = state.contacts.some(
        contact => contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );

      // If the contact does not already exist, add it to the state
      if (!doesExist) {
        state.contacts.push(action.payload);
      }
    },
    //  Reducer for deleting a contact
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { actions } = contactsSlice;
export default contactsSlice.reducer;