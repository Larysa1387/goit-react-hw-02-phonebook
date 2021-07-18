import React, { Component } from 'react';
import shortid from 'shortid';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
import './App.css';

class App extends Component {
	state = {
		contacts: [
			{
				id: 'id-1',
				name: 'Rosie Simpson',
				number: '459-12-56',
				contactType: 'work',
			},
			{
				id: 'id-2',
				name: 'Hermione Kline',
				number: '443-89-12',
				contactType: 'home',
			},
			{
				id: 'id-3',
				name: 'Eden Clements',
				number: '645-17-79',
				contactType: 'other',
			},
			{
				id: 'id-4',
				name: 'Annie Copeland',
				number: '227-91-26',
				contactType: 'work',
			},
    ],
    filter:'',
	};

	contactPhonebookSubmit = (data) => {
		console.log(data);
		const contact = {
			id: shortid.generate(),
			name: data.name,
			number: data.number,
			contactType: data.contactType,
		};
		this.setState(({contacts}) => ({
			contacts: [contact, ...contacts],
		}));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  }
  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
		return contacts.filter((contact) =>
			contact.name.toLowerCase().includes(normalizedFilter),
		);
  }

  render() {
    const visibleContacts = this.getVisibleContact();
		return (
			<div className="App">
				<h1>Phonebook</h1>
				<section>
					<Form onSubmit={this.contactPhonebookSubmit} />
				</section>
				<h2>Contacts</h2>
				<section>
					<Filter value={this.state.filter} onChange={this.changeFilter} />
				</section>
				<section>
					<Contacts contacts={visibleContacts} />
				</section>
			</div>
		);
	}
}

export default App;
