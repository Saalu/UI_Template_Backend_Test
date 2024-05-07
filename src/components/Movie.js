import axios from 'axios'
import React,{useState, useEffect} from 'react'

const Movie = () => {
    const [movies, setMovies] = useState([])

   const FEATURED_API= 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.des&api_key=04c35731a5ee918f014970082a0088b1&page=1'
   const IMG_API = "https://image.tmdb.org/t/p/w1280"
   const SEARCH_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.des&api_key=04c35731a5ee918f014970082a0088b1&query="

   const data_url ='https://jsonplaceholder.typicode.com/todos/'

   useEffect( () => {
    const getData = async() =>{
        try {
            const res = await axios.get(FEATURED_API)
            
            console.log({msg:res.data});
        } catch (err) {
            console.log(err.message);
        }
        //   fetch(FEATURED_API)
        //     .then(res => res.json())
        //     .then(data => console.log(data))
    }
    getData()
     
   },[])
   
  return (
    <div className='movie'>
      Movie
    </div>
  )
}

export default Movie
