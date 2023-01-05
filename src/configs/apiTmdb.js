const apiTmdb = {
  endpoint: '/movie/upcoming',
  baseUrl: 'https://api.themoviedb.org/3',
  apiKey: '?api_key=df7934f249ad19ef751a3c7ae05883e7',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`,
}

export default apiTmdb
