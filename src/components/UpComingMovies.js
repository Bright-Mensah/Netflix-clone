import React,{useState,useEffect} from 'react';
import instance from '../Axios';
import API_KEY from '../API_KEY';
import ImgUrl from './ImageUrl';

const UpComingMovies = () => {

    const[UpComingMovies,setUpcomingMovies]= useState([]);

    // fetch data 

    const getData = async function (){
        let result = await instance.get(`upcoming?api_key=${API_KEY}&language=en-US&page=1`);

        setUpcomingMovies(result.data.results);
    }




    useEffect(()=>{
        getData()

    },[UpComingMovies])


  return (
    <div>

        <h3>UpComingMovies</h3>

        <div className="movie-container">
            {UpComingMovies.map(movie=>(
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

export default UpComingMovies