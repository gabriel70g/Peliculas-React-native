import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'fe67779bdcaebf4fcd8cffc4eefafb36',
    language: 'es-ES',
  }
})


export default movieDB;