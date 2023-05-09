import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  addContact = contact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };
  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  handleChangeInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  // onSubmitForm = e => {
  //   e.preventDefault();
  //   const word = {
  //     id: nanoid(3),
  //     ...this.state,
  //   };
  // };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm addContact={this.addContact} /> */}

        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
