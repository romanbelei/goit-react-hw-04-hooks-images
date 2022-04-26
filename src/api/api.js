import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api';

async function fetchImages(query, currentPage) {
  const response = await axios.get(
    `https://pixabay.com/api/?q=cat&page=1&key=25722602-ef4054fc4542d7cb871df6c01&q=${query}&image_type=photo&orientation=horizontal&page=${currentPage}&per_page=12`
  );
  // const data = response.data;
  return response.data;
}

export default fetchImages;
