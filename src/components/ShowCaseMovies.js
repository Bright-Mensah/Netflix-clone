import React,{useState,useEffect} from 'react';
import instance from '../Axios';
import API_KEY from '../API_KEY';
import ImgUrl from './ImageUrl';

const ShowCaseMovies = () => {
    const[showCaseMovies,setShowCaseMovies] = useState([]);

    // fetch data

    const getData = async ()=>{
        let result = await instance.get(`upcoming?api_key=${API_KEY}&language=en-US&page=1`);
        setShowCaseMovies(result.data.results);
    }

    // get movie randomly

    function getRandomMovie(item){
       return item[Math.floor(Math.random() * item.length)]
     }
   
     

    useEffect(()=>{
        getData();
    },[ShowCaseMovies])


  return (
    <div>
        <div className="billboard-container">
            {showCaseMovies.map(movie=>(
                <img src={`${ImgUrl}${movie.poster_path}`} alt={movie.title} />
            ))}
        </div>
    </div>
  )
}

export default ShowCaseMovies