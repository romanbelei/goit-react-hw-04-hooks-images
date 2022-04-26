import React, { useEffect } from 'react';
import s from './Modal.module.css';

export default function Modal({ onClose, refLargImage }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };
  const closeModal = () => {
    window.removeEventListener('keydown', handleKeyDown);
    onClose();
  };

  return (
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <img src={refLargImage} alt="" />
      </div>
    </div>
  );
}
