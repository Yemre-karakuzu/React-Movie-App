import "./App.css";
import Header from './Components/Header';
import Movie from "./Components/Movie";
import Footer from "./Components/Footer";
import { getDiscover, getGenre } from './Lib/services';
import { useEffect, useState } from 'react';

function App() {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState([])
    const [discover, setDiscover] = useState("popular")
    useEffect(() => {
        getMovies();
        getGenre();
    }, [discover])

    const getMovies = async () => {
        const movie = await getDiscover(discover);
        console.log("movie", movie)
        setPage(movie.total_pages)
        setMovies(movie.results)
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
            <Footer />
        </>
    );
}

export default App;