import axios from 'axios';

const fetchData = axios.create({
  baseURL: 'https://backendexample.sanbercloud.com/api',
});

export default fetchData;
