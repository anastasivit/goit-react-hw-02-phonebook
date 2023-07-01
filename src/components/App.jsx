import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Phonebook</h1>
        <ContactForm contacts={contacts} onAddContact={this.handleAddContact} />
        <h2 className={styles.heading}>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  handleAddContact = (name, number) => {
    const { contacts } = this.state;

    const isDuplicateName = contacts.some(contact => contact.name === name);

    if (isDuplicateName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: Date.now().toString(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
}

export default App;
