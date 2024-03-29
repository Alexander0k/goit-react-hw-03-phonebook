import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.css'

class ContactForm extends Component {
    state = { name: '', number: '' }

    handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset(event);
    };

    reset = event => {
        event.currentTarget.reset();
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <label>
                    Name
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            onChange={this.handleChange}
                            className={styles.input}
                        />
                </label>
                <label>
                    Number
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            onChange={this.handleChange}
                            className={styles.input}
                        />
                </label>
                <button type="submit" className={styles.button}>Add contact</button>
            </form>
        );
    }
}

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default ContactForm;