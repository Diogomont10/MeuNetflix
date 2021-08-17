const API_KEY = '0ca1566aa45c57ffa39398597d5ae501';
const API_BASE ='http://api.themoviedb.org/3';


const basicFetch = async (endpoint) => {
  const req = await fetch('${API_BASE}${endpoint}');
  const json = await req.json();
  return json;

}


  export default {
  getHomelist: async () => {
    return [
      {
        slug: 'originals',
        title:'Originais do Netflix',
        items: await basicFetch('/discovery/tv?with_network=213&language=pt-BR&api_key=${API_KEY}')
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch('/trending/all/week?languade=pt-BR&api_key=${API_KEY}')
      },
      { 
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch('/movie/top_rated?languafe=pt-BR&api-key=${API_KEY}')
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch('/discovery/movie?with_generes=28&language=pt-BR&api_key=${API_KEY}')
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch('/discovery/movie?with_generes=35&language=pt-BR&api_key=${API_KEY}')
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch('/discovery/movie?with_generes=27&language=pt-BR&api_key=${API_KEY}')
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch('/discovery/movie?with_generes=10749&language=pt-BR&api_key=${API_KEY}')
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch('/discovery/movie?with_generes=99&language=pt-BR&api_key=${API_KEY}')
      },
    ]
  }
}