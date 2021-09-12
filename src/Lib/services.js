import axios from "axios";

async function baseApi() {
    const apiUrl =
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    const { data } = await axios(apiUrl);
    return data.results;
}

async function imgApi() {
    const imgUrl = "https://image.tmdb.org/t/p/w1280";
    // const { data } = await axios(imgUrl + path);
    return imgUrl;
}

async function searchApi(quary) {
    const searchApi =
        "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
    const { data } = await axios(searchApi + quary);
    return data.results;
}

export { searchApi, imgApi, baseApi };