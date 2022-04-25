import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import s from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  state = {
    pictures: [],
    loading: false,
    error: null,
    // status: Status.IDLE,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pictureName;
    const nextName = this.props.pictureName;
    const prevPage = prevProps.page;
    const nextPage = this.props.page;
    if (prevName !== nextName || prevPage !== nextPage) {
      if (prevName !== nextName) {
        this.setState({ loading: true, pictures: [] });
        this.props.showButton(false);
      }
      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=cat&page=1&key=25722602-ef4054fc4542d7cb871df6c01&q=${nextName}&image_type=photo&orientation=horizontal&page=${this.props.page}&per_page=12`
        )
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(new Error(`Помилка завантаження`));
          })
          .then(data => {
            const { hits } = data;
            if (this.state.pictures.length > 0) {
              this.setState(prevState => ({
                pictures: [...prevState.pictures, ...hits],
              }));
            } else {
              this.setState(prevState => ({
                pictures: [...hits],
              }));
            }
            if (this.props.page !== 1) {
              this.props.scrollOnLoadButton();
            }
            if (
              this.state.pictures.length < 12 ||
              this.props.page * 12 >= data.totalHits
            ) {
              this.props.showButton(false);
            } else {
              this.props.showButton(true);
            }
          })
          .catch(error => this.setState({ error }))
          .finally(() => {
            this.setState({ loading: false });
          });
      }, 1000);
    }
  }

  showLargImage = e => {
    this.state.pictures.map(p => {
      if (Number(p.id) === Number(e.currentTarget.id)) {
        return this.props.showlargImage(p.largeImageURL);
      }
      return null;
    });
    this.props.togleModal();
  };

  render() {
    return (
      <>
        {this.state.loading && <Loader />}
        {this.state.error && <h1>{this.state.error.message}</h1>}
        {this.state.pictures &&
          this.state.pictures.map(p => {
            return (
              <li
                key={p.id}
                id={p.id}
                className={s.ImageGalleryItem}
                onClick={this.showLargImage}
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
}
