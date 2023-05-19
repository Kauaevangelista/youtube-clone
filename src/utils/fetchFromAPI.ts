import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

interface Options {
  params: {
    maxResults: number;
  };
  headers: {
    'X-RapidAPI-Key': string;
    'X-RapidAPI-Host': string;
  };
}

const options: Options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': "d88b8c8674mshf6b6b4fd5142ae8p1f7073jsnfbf92a07a12e",
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(data)

  return data;
};
