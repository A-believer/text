import axios from "axios";

const options = {
    params: {
      maxResults: "50"
  },
  headers: {
    'X-RapidAPI-Key': '1b4c67bdc0msha7de1e7a131096fp1eba13jsn14ebbc139c78',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    
    return data;
}