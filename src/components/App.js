import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import s from './App.module.css';

export default class App extends Component {
  state = {
    pictureName: '',
    buttonLoadMore: false,
    page: 1,
    showModal: false,
    largImage: '',
  };

  handleFormSubmit = pictureName => {
    this.setState({ pictureName });
  };

  showLoadMore = show => {
    this.setState({ buttonLoadMore: show });
  };

  loadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  togleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleLargImage = ref => {
    this.setState({ largImage: ref });
  };

  scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          pictureName={this.state.pictureName}
          showLoad={this.showLoadMore}
          page={this.state.page}
          showlargImage={this.handleLargImage}
          togleModal={this.togleModal}
          scrollOnLoadButton={this.scrollOnLoadButton}
        />
        {this.state.buttonLoadMore && <Button onClickButton={this.loadMore} />}
        {this.state.showModal && (
          <Modal
            onClose={this.togleModal}
            refLargImage={this.state.largImage}
          />
        )}
        <ToastContainer autoClose={2000} position="top-center" />
      </div>
    );
  }
}

// scrollOnLoadButton={this.scrollOnLoadButton}
