import React from 'react';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number, contactType }) => {
        return (
          <li key={id} className={s.contactItem}>
            <p>{name}</p>
            <div className={s.align}>
              <p>{number}</p>
              <p className={s.contactType}>({contactType})</p>
            </div>
            <button className={s.btnDelete} onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
