import React, {Component}  from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Oval from './Loader/Loader';
import Modal from './Modal/Modal';
import { fetchImages } from '../services/fetchImages';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    showModal: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { currentPage, searchQuery } = this.state;

    this.setState({ isLoading: true });

    try {
      const newImages = await fetchImages(searchQuery, currentPage);
      this.setState((prevState) => ({
        images: [...prevState.images, ...newImages],
        currentPage: prevState.currentPage + 1,
      }));
    } catch (error) {
        console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };


  handleSearchSubmit = (query) => {
    this.setState({ searchQuery: query, currentPage: 1, images: [] });
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  handleImageClick = (largeImageURL) => {
    this.setState({ showModal: true, largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, largeImageURL: '' });
  };

  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />

        {isLoading && <Oval />}

        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore} />
        )}

        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}


export default App