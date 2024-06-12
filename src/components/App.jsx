import { Component } from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

export default class App extends Component {
      state = {
        contacts: [],
        filter: "",
      };

  addContact = (newContact) => {
    const { contacts } = this.state;
    if (contacts.some((contact) => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, newContact],
      }));
    }
  };
  
  handleFilterChange = (ev) => {
    this.setState({ filter: ev.currentTarget.value });
  };

  removeContact = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id)
    }));
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}/>

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDelete={this.removeContact} />
      </>
    );
  }
}
