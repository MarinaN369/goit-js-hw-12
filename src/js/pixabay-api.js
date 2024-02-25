import axios from "axios";
export async function fetchImages(keyWord, currentPage) {
    const API_KEY = '42425146-5a6f6f85f31b19991ee4b7315'
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const params = {
        key: API_KEY,
        q: keyWord,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 15,
        page: currentPage,
    }
        
    const url = `${BASE_URL}${END_POINT}`;
  

    const response = await axios.get(url, { params })

    return response.data;
}