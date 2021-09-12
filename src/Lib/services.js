import axios from "axios";
import { base_url, api_key } from "./api-base";

async function getDiscover(keyword, genre = "") {
    const apiUrl = `${base_url}/movie/${keyword}?api_key=${api_key}&language=en-US&page=1`;
    // const apiUrl = `${base_url}/movie/${keyword}?api_key=${api_key}&language=en-US&page=1&with_genres=${genre}`;
    const { data } = await axios(apiUrl);
    return data;
}

async function searchApi(quary) {
    const searchApi = `${base_url}/search/movie?api_key=${api_key}&language=en-US&page=1&query=${quary}`;
    const { data } = await axios(searchApi);
    return data.results;
}

async function getGenre() {
    const genreUrl = `${base_url}/genre/movie/list?api_key=${api_key}&language=en-US`;
    const { data } = await axios(genreUrl);
    return data.genres;
}

export { searchApi, getDiscover, getGenre };