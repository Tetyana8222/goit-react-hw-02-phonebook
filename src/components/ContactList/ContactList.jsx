import React from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts }) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>{name}: </p>
            <p>{number}</p>
            <button type="button">Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
