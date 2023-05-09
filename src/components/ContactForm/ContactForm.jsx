import React, { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  render() {
    return (
      <form onSubmit={this.onSubmitForm} action="">
        <div>
          <label htmlFor="">
            NAME
            <input
              onChange={this.handleChangeInput}
              type="text"
              name="name"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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
          <button>ADD CONTACT</button>
        </div>
      </form>
    );
  }
}
