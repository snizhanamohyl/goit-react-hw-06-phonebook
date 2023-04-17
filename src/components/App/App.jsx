// import { useEffect } from 'react';
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact, deleteContactById } from 'store/contacts/actions';
import { updateFilterValue } from 'store/filter/actions';

export default function App() {
  const { contacts } = useSelector((state) => state.contacts);
  const {filter} = useSelector((state) => state.filter);

  const dispatch = useDispatch();  

  const addContact = (newContact) => {
    dispatch(addNewContact(newContact))
  }
  
  const deleteContact = (id) => {
    dispatch(deleteContactById(id))
  }

  const filterContacts = () => {   
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return filter === "" ?  contacts : filteredContacts;
  }
  
  const updateFilter = (inputValue) => {
    dispatch(updateFilterValue(inputValue))
  }
  
  return <div className={css.container}>
      <h1>Phonebook</h1>
      <Form contacts={contacts} addContact={addContact}  />
      {contacts.length !== 0 && <div><h2>Contacts</h2>
      <Filter filterValue={filter} updateFilter={ updateFilter} />
      <Contacts deleteContact={deleteContact} contacts={filterContacts()} /></div>}
    </div>

  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');
  
  // useEffect(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (savedContacts) setContacts(savedContacts);
  // }, [])

  // const addContact = (newContact) => {
  //   setContacts(prev => {
  //     const newContacts = [...prev, newContact];

  //     localStorage.setItem("contacts", JSON.stringify(newContacts));

  //     return newContacts;
  //   });
  // }

  // const deleteContact = (id) => {
  //   setContacts(prev => {
  //     const updatedContacts = prev.filter(contact => contact.id !== id);

  //     localStorage.setItem("contacts", JSON.stringify(updatedContacts));

  //     return updatedContacts; 
  //   })
  // }

  // const filterContacts = () => {   
  //   const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  //   return filter === "" ?  contacts : filteredContacts;
  // }
}
