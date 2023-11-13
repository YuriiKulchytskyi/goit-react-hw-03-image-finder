import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Oval from './Loader/Loader';
import Modal from './Modal/Modal';
import { Component } from 'react';


export class App extends Component {
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

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const apiKey = '39406634-bdefc0ba04eb08cccc787049c';
    const baseUrl = 'https://pixabay.com/api/';
    const perPage = 12;

    this.setState({ isLoading: true });

    axios
      .get(
        `${baseUrl}?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`
      )
      .then((response) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => console.error('Error fetching images:', error))
      .finally(() => this.setState({ isLoading: false }));
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

        {isLoading && <Oval/>}

        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore} />
        )}

        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.handleCloseModal}/>
        )}
      </div>
    );
  }
}

