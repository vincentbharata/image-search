import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: 'Client-ID iNQ6x6YTUd6OS2CPDW5gw4AhnszX1kx62Hiv7yd-1RQ',
    },
    params: {
      query: term,
    },
  });
 
  return response.data.result;
};

export default searchImages;
