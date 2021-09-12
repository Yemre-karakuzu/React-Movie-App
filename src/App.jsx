import "./App.css";
import Movie from "./Components/Movie";
import {baseApi,searchApi} from './Lib/services';
import {useEffect,useState} from 'react';
function App() {
    const [movies,setMovies]=useState([])
    const [serchText,setSearchText]=useState('')
    useEffect( ()=>{
        getMovies();
    },[])
    const getMovies=async () =>{
         const movie= await baseApi();
         setMovies(movie)
    }
    const handleOnSubmit=async (e)=>{
        e.preventDefault();
        if(serchText){
            const searchData= await searchApi(serchText);
             setMovies(searchData)
             setSearchText("")
        }
    }
    const handleOnChange= (e)=>{
       setSearchText(e.target.value)
    }
    return ( 
        <>
        <header>
            <form onSubmit={handleOnSubmit}>
                <input value={serchText} onChange={handleOnChange} className="search" type="search" placeholder="Search.."/>
            </form>
        </header>
        <div className="movie-container" >
            {
            movies.length>0 && movies.map((movie)=>
                <Movie key={movie.id} {...movie} />
            )
            }
        </div>
        </>
    );
}

export default App;