import { useDispatch } from 'react-redux';
import { actions } from '../contactsSlice'; 
import styled from 'styled-components';

const ButtonDel = styled.button`
  background-color: grey; 
  border: 1px solid black;
  color: white;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  margin-left: 10px;
  font-size: 12px;
  cursor: pointer;
`;

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li>
      { contact.name }: {contact.number}
      <ButtonDel onClick={() => dispatch(actions.deleteContact(contact.id))}>Delete</ButtonDel>
    </li>
  );
};

export default ContactListItem;