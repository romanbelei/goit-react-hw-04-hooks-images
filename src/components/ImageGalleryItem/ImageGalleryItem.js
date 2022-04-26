import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import fetchImages from '../../api/api';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({
  pictureName,
  page,
  scrollOnLoadButton,
  showButton,
  showlargImage,
  togleModal,
}) {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (pictureName !== '') {
      setLoading(true);
      setPictures([]);
      showButton(false);
      setTimeout(() => {
        fetchImages(pictureName, page)
          .then(data => {
            const { hits } = data;
            setPictures(prevState => [...prevState, ...hits]);
            if (page !== 1) {
              scrollOnLoadButton();
            }
            if (pictures.length <= 12 && page * 12 < data.totalHits) {
              showButton(true);
            } else {
              showButton(false);
            }
          })
          .catch(error => setError(error))
          .finally(() => {
            setLoading(false);
          });
      }, 1000);
    }
  }, [pictureName, page]);

  const showLargImage = e => {
    pictures.map(p => {
      if (Number(p.id) === Number(e.currentTarget.id)) {
        return showlargImage(p.largeImageURL);
      }
      return null;
    });
    togleModal();
  };

  return (
    <>
      {loading && <Loader />}
      {error && <h1>{this.state.error.message}</h1>}
      {pictures &&
        pictures.map(p => {
          return (
            <li
              key={p.id}
              id={p.id}
              className={s.ImageGalleryItem}
              onClick={showLargImage}
            >
              <img
                className={s['ImageGalleryItem-image']}
                src={p.webformatURL}
                alt={p.tags}
              />
            </li>
          );
        })}
    </>
  );
}
