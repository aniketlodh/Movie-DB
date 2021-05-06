import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Search from "./Search";
import MovieGrid from './MovieGrid';
function Home() {
    const [query,setQuery]=useState('batman');
    const [item,setItem]=useState([]);
    useEffect(()=>{
        const fetchMovies=async ()=>{
        const result=await axios(
            `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}`
            );
        setItem(result?.data.Search);
    }
    fetchMovies();
    console.log(item);
  },[query])
    return (
        <div className="Home">
            <Header name={"Search Movies"}/>
            <Search getQuery={(q) => setQuery(q)}/>
            <MovieGrid items={item}/>
        </div>
    )
}

export default Home
