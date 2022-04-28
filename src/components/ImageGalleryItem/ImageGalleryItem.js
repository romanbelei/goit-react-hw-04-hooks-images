import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import { fetchImages } from '../../api/api';
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

  useEffect(() => {
    // other code
    if (!pictureName) {
      return;
    }
    setLoading(true);
    showButton(false);
    setTimeout(() => {
      fetchImages(pictureName, page)
        .then(data => {
          const { hits } = data;
          setPictures(prevState => [...prevState, ...hits]);
          if (pictures.length > 12 || page * 12 < data.totalHits) {
            showButton(true);
          } else {
            showButton(false);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pictureName, page]);

  if (page !== 1) {
    scrollOnLoadButton();
  }
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
      {/* {error && <h1>{error.message}</h1>} */}
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
