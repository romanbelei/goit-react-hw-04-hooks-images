import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

function ImageGallery({
  pictureName,
  showButton,
  page,
  showlargImage,
  togleModal,
  scrollOnLoadButton,
}) {
  //   console.log({ showLoad });
  return (
    <ul className={s.ImageGallery}>
      <ImageGalleryItem
        pictureName={pictureName}
        showButton={showButton}
        page={page}
        showlargImage={showlargImage}
        togleModal={togleModal}
        scrollOnLoadButton={scrollOnLoadButton}
      />
      {/* <!-- Набор <li> с изображениями --> */}
    </ul>
  );
}
ImageGallery.propTypes = {
  showButton: PropTypes.func.isRequired,
  showlargImage: PropTypes.func.isRequired,
  togleModal: PropTypes.func.isRequired,
  scrollOnLoadButton: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  pictureName: PropTypes.string.isRequired,
};
export default ImageGallery;
