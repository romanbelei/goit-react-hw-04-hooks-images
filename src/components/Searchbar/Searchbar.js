import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
  state = {
    pictureName: '',
  };

  handleChange = e => {
    this.setState({ pictureName: e.currentTarget.value.toLowerCase() });
    // console.log();
  };

  handleOnSubmit = e => {
    e.preventDefault();
    if (this.state.pictureName.trim() === '') {
      return toast.error('Введіть назву картинки');
    }
    this.props.onSubmit(this.state.pictureName);
    // console.log(this.state.pictureName);
    this.setState({ pictureName: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleOnSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={s.SearchFormInput}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            value={this.state.pictureName}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
