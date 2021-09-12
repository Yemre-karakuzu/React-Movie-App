import { useState, useEffect } from 'react'
import { searchApi, getGenre } from '../Lib/services';

function Header({ discover, setMovies, setDiscover }) {
    useEffect(() => {
        getGenreFunc()
    })
    const [serchText, setSearchText] = useState('')
    const [genre, setGenre] = useState([])
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (serchText) {
            const searchData = await searchApi(serchText);
            setMovies(searchData)
            setSearchText("")
            setDiscover("")
        }
    }
    const handleOnChange = (e) => {
        setSearchText(e.target.value)
    }
    const getGenreFunc = async () => {
        const genreList = await getGenre()
        setGenre(genreList)
    }
    return (
        <>
            <header>
                <div className="header-discover">
                    <span className={discover === "popular" ? 'discover active' : 'discover'} onClick={() => setDiscover("popular")} >Popular</span>
                    <span className={discover === "top_rated" ? 'discover active' : 'discover'} onClick={() => setDiscover("top_rated")} >Top Rated</span>
                    <span className={discover === "upcoming" ? 'discover active' : 'discover'} onClick={() => setDiscover("upcoming")} >Upcoming</span>
                    <label for="genre">Choose a genre:</label>
                    <select name="genre" id="genre">
                        {
                            genre.map((element) =>
                                <option key={element.id} value={element.name}>{element.name}</option>
                            )
                        }
                    </select>
                </div>
                <form onSubmit={handleOnSubmit}>
                    <input value={serchText} onChange={handleOnChange} className="search" type="search" placeholder="Search.." />
                </form>
            </header>
        </>
    )
}

export default Header
