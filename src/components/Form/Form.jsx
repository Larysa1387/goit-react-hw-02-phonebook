import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
	state = {
		name: '',
		number: '',
		contactType: 'home',
	};

	contactInputId = shortid.generate();
	numberInputId = shortid.generate();

	handleInputChange = (e) => {
		const { name, value } = e.currentTarget;
		this.setState({ [name]: value });
	};
	handleFormSubmit = (e) => {
		e.preventDefault();
		// console.log(this.state);
		this.props.onSubmit(this.state);
		this.reset();
	};

	reset = () => {
		this.setState({ name: '', number: '' });
	};

	render() {
		return (
			<form onSubmit={this.handleFormSubmit}>
				<label htmlFor={this.contactInputId}>
					Name
					<input
						type="text"
						name="name"
						value={this.state.name}
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
						required
						autoComplete="off"
						id={this.contactInputId}
						onChange={this.handleInputChange}
					/>
				</label>
				<label htmlFor={this.numberInputId}>
					Number
					<input
						type="tel"
						name="number"
						value={this.state.number}
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
						required
						id={this.numberInputId}
						onChange={this.handleInputChange}
					/>
				</label>

				<p>Choose type of contact</p>
				<label>
					<input
						type="radio"
						name="contactType"
						value="home"
						onChange={this.handleInputChange}
						checked={this.state.contactType === 'home'}
					/>
					Home
				</label>
				<label>
					<input
						type="radio"
						name="contactType"
						value="work"
						onChange={this.handleInputChange}
						checked={this.state.contactType === 'work'}
					/>
					Work
				</label>
				<label>
					<input
						type="radio"
						name="contactType"
						value="other"
						onChange={this.handleInputChange}
						checked={this.state.contactType === 'other'}
					/>
					Other
				</label>
				<button type="submit" disabled={!this.state.name}>Add contact</button>
			</form>
		);
	}
}

export default Form;
