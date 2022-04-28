import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import s from './App.module.css';

export default function App() {
  const [pictureName, setPictureName] = useState('');
  const [buttonLoadMore, setButtonLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largImage, setLargImage] = useState('');

  const handleFormSubmit = pictureName => {
    setPictureName(pictureName);
  };

  const showLoadMore = show => {
    setButtonLoadMore(show);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const togleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const handleLargImage = ref => {
    setLargImage(ref);
  };

  const scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={s.App}>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery
        pictureName={pictureName}
        showButton={showLoadMore}
        page={page}
        showlargImage={handleLargImage}
        togleModal={togleModal}
        scrollOnLoadButton={scrollOnLoadButton}
      />
      {buttonLoadMore && <Button onClickButton={loadMore} />}
      {showModal && <Modal onClose={togleModal} refLargImage={largImage} />}
      <ToastContainer autoClose={2000} position="top-center" />
    </div>
  );
}

// scrollOnLoadButton={this.scrollOnLoadButton}
