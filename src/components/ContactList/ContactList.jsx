import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <p>{contact.contactType}</p>
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
