import React, {useEffect, useState} from 'react'; 
import tmdb from './tmdb';

export default function App()  {

  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async () => {
      //pegando a lista total
      let list = await tmdb.getHomelist();
      setMovieList(list);
    }

    loadAll();
  },  []);

  return (
    <div className="page">
     <section className="lists">
       {movieList.map((item, key, )=>(
         <div>
           {item.title}
                 
         </div>
       ))}
     </section>          
    </div>
  );
}