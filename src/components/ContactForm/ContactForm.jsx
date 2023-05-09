import React, { Component } from 'react';
import { nanoid } from 'nanoid';
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChangeInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmitForm = event => {
    console.log(this.state);
    event.preventDefault();
    const newContact = {
      id: nanoid(3),
      ...this.state,
    };
    this.props.addContact(newContact);
    //cleaning form reset
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <div>
          <label>
            NAME
            <input
              onChange={this.handleChangeInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
            />
          </label>
          <label htmlFor="">
            NUMBER
            <input
              onChange={this.handleChangeInput}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
            />
          </label>
          <button type="submit">ADD CONTACT</button>
        </div>
      </form>
    );
  }
}
ContactForm.propTypes = {};
