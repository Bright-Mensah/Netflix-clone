import React from 'react';
import './App.css';
import Netflix_Originals from './components/Netflix_Originals';
import Trending_Movies from './components/Trending_Movies';
import UpComingMovies from './components/UpComingMovies';
import NavBar from './components/NavBar';
// import ShowCaseMovies from './components/ShowCaseMovies';



function App() {


 
  return (
    <div className='containers'>

      <NavBar />
      {/* <ShowCaseMovies /> */}
      <Netflix_Originals />
      <Trending_Movies />
      <UpComingMovies />
     

      </div> 

   

  )
}

export default App