import axios from 'axios';

const API_KEY = '39406634-bdefc0ba04eb08cccc787049c';
const BASE_URL = 'https://pixabay.com/api/';
const perPage = 12;

export const fetchImages = async (query, currentPage) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    );

    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
