import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
  contactType: 'home',
};
class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  contactInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    const { contacts, onSubmit } = this.props;
    if (contacts.find((contact) => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number, contactType } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit} className={s.ContactForm}>
        <div className={s.align}>
          <label htmlFor={this.contactInputId} className={s.inputLabel}>
            Name
            <input
              className={s.formInput}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              autoComplete="off"
              id={this.contactInputId}
              placeholder="Enter name"
              onChange={this.handleInputChange}
            />
          </label>
          <label htmlFor={this.numberInputId} className={s.inputLabel}>
            Number
            <input
              className={s.formInput}
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              id={this.numberInputId}
              placeholder="+380..."
              onChange={this.handleInputChange}
            />
          </label>
        </div>
          <p className={s.radioTitle}>Choose type of contact</p>
        <div className={s.radioAlign}>
          <label className={s.radioLabel}>
            <input
              type="radio"
              name="contactType"
              value="home"
              onChange={this.handleInputChange}
              checked={contactType === 'home'}
            />
            Home
          </label>
          <label className={s.radioLabel}>
            <input
              type="radio"
              name="contactType"
              value="work"
              onChange={this.handleInputChange}
              checked={contactType === 'work'}
            />
            Work
          </label>
          <label className={s.radioLabel}>
            <input
              type="radio"
              name="contactType"
              value="other"
              onChange={this.handleInputChange}
              checked={contactType === 'other'}
            />
            Other
          </label>
        </div>
        <button className={s.btnSubmit} type="submit" disabled={!name}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired)),
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
