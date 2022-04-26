import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar({ onSubmit }) {
  const [pictureName, setPictureName] = useState('');

  const handleChange = e => {
    setPictureName(e.currentTarget.value.toLowerCase());
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    if (pictureName.trim() === '') {
      return toast.error('Введіть назву картинки');
    }
    onSubmit(pictureName);
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleOnSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={s.SearchFormInput}
          type="text"
          name="name"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
          value={pictureName}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
