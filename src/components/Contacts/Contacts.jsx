import React from 'react';

const Contacts = ({ contacts }) => {

  return (
    <ul>
      {contacts.map((contact) => {
        return (
					<li key={contact.id}>
						<p>{contact.name}</p>
						<p>{contact.number}</p>
						<p>{contact.contactType}</p>
					</li>
				);
      })}
    </ul>
  );
}

export default Contacts;
