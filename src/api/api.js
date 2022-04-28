import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api';
const BASE_URL = 'https://pixabay.com/api/';
const KEY = '25722602-ef4054fc4542d7cb871df6c01';

export async function fetchImages(query, currentPage) {
  const response = await axios.get(
    `${BASE_URL}?q=cat&page=1&key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&page=${currentPage}&per_page=12`
  );
  try {
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}
