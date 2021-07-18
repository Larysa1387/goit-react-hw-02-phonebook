import React, { Component } from 'react';
import shortid from 'shortid';
import Form from './components/Form';
import Contacts from './components/Contacts';
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
	};

  contactPhonebookId = shortid.generate();

	contactPhonebookSubmit = (data) => {
		console.log(data);
		const contact = {
			id: this.contactPhonebookId,
			name: data.name,
			number: data.number,
			contactType: data.contactType,
		};
		this.setState(({contacts}) => ({
			contacts: [contact, ...contacts],
		}));
	};

	render() {
		return (
			<div className="App">
				<h1>Phonebook</h1>
				<section>
					<Form onSubmit={this.contactPhonebookSubmit} />
				</section>
        <h2>Contacts</h2>
        <section>
          {/* <Filter/> */}
        </section>
				<section>
					<Contacts contacts={this.state.contacts} />
				</section>
			</div>
		);
	}
}

export default App;
