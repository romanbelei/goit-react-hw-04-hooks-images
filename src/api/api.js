import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImages = async (query, currentPage) => {
  const { data } = await axios.get(
    `/?q=${query}&page=${currentPage}&key=25722602-ef4054fc4542d7cb871df6c01&q&image_type=photo&orientation=horizontal&per_page=12`
  );

  return data;
};

export default fetchImages;
