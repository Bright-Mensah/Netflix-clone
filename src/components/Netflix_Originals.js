import React,{useState,useEffect} from 'react';
import API_KEY from '../API_KEY';
import instance from '../Axios';
import imgUrl from './ImageUrl';





function Netflix_Originals() {

    const[netflixOriginals,setNetflixOriginals] = useState([]);
  
  
    async function fetchData (){
      let result = await instance.get(`popular?api_key=${API_KEY}&language=en-US&page=1`)
  
      
  
  
      setNetflixOriginals(result.data.results);
      
    }
    
    
    
    useEffect(()=>{
      fetchData()
  
    },[netflixOriginals])
  
  
    return (
      <div>
        <h1>Netflix-originals</h1>
  
     
         <div className="movie-container">
          {netflixOriginals.map(movie=>(
            
            <div className="row">
            <div>
              
              <img   className='poster' src={`${imgUrl}${movie.poster_path}`} alt={movie.title} />
              <p className='title'>{movie.title}</p>
            </div>
        </div>
          ))}
  
       
  
        </div> 
  
        {/* Trending now movies */}
  
      
      
      
      </div>
    )
  }

  export default Netflix_Originals;
