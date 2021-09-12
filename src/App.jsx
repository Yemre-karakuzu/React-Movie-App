import "./App.css";
import Movie from "./Components/Movie";
import { getDiscover, getGenre } from './Lib/services';
import { useEffect, useState } from 'react';
import Header from './Components/Header';

function App() {
    const [movies, setMovies] = useState([])
    const [discover, setDiscover] = useState("popular")
    useEffect(() => {
        getMovies();
        getGenre();
    }, [discover])

    const getMovies = async () => {
        const movie = await getDiscover(discover);
        setMovies(movie)
    }

    return (
        <>
            <Header discover={discover} setMovies={setMovies} setDiscover={setDiscover} />
            <div className="movie-container" >
                {
                    movies.length > 0 && movies.map((movie) =>
                        <Movie key={movie.id} {...movie} />
                    )
                }
            </div>
        </>
    );
}

export default App;