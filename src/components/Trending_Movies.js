import React,{useState,useEffect} from 'react';
import instance from '../Axios';
import ImgUrl from './ImageUrl';
import API_KEY from '../API_KEY';

const Trending_Movies = () => {

    const [trendingMovies,setTrendingMovies] = useState([]);


    // fetch trending movies and set it to the state

    const fetchData = async ()=>{
         let data = await  instance.get(`top_rated?api_key=${API_KEY}&language=en-US&page=1`);
       
       

        setTrendingMovies(data.data.results);
    }


    
    
    useEffect(function(){
        fetchData()

    },[trendingMovies])




  return (
    <div>

        <h3>Trending_Movies</h3>

        <div className="movie-container">

            {trendingMovies.map(movie=>(
                <div className="row">
                    <div>
                    <img className='img' src={`${ImgUrl}${movie.backdrop_path}`} alt={movie.title} />
                    <p>{movie.title}</p>

                    </div>
                </div>
            ))}
        </div>
    </div>

  )
}

export default Trending_Movies