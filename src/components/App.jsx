import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './contactsSlice'; 
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const App = () => {
  // Hooks from react-redux for dispatching actions and selecting state.
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector(state => state.contacts);

  // Action dispatchers for deleting a contact, adding a contact, and setting the filter.
  const deleteContact = id => dispatch(actions.deleteContact(id));
  const handleAddContact = newContact => {
    // Check if the contact already exists before adding.
    const doesExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (doesExist) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      dispatch(actions.addContact(newContact));
    }
  };
  const handleFilterChange = event => dispatch(actions.setFilter(event.target.value));

  // Filter the contacts based on the filter string.
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // The component renders a form for adding contacts, a filter input, and a list of contacts.
  return (
    <CenteredContainer>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </CenteredContainer>
  );
};

export default App;