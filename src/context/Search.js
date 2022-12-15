import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const SearchContext = createContext();

const API_URL = "https://api.themoviedb.org/";
const API_KEY = "api_key=28d5df611ec841cf9780851fb5c907f1"

export const SearchProvider = ({ children }) => {
  const [listTitle, setListTitle] = useState("");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    try {
      axios.get(`${API_URL}/3/movie/popular?${API_KEY}`)
        .then(({ data }) => {
          if (data.results) {
            setListTitle("Popular Movies")
            setMovieList(data.results)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    } catch (error) {
      console.log("Error on get a popular movies ", error)
    }
  }, []);

  async function getMovieListByTerm(term) {
    try {
      axios.get(`${API_URL}/3/search/movie?${API_KEY}&query=${term}`)
        .then(({ data }) => {
          if (data.results) {
            setListTitle(`Results for: ${term}`)
            setMovieList(data.results)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    } catch (error) {
      console.log("Error on get movie list by term ", error)
    }
  }

  async function getMovieListByGender(id, name) {
    try {
      axios.get(`${API_URL}/3/discover/movie?${API_KEY}&with_genres=${id}`)
        .then(({ data }) => {
          if (data.results) {
            setListTitle(name)
            setMovieList(data.results)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    } catch (error) {
      console.log("Error on get movie list by gender ", error)
    }
  }

  async function getMovieById(id) {
    const response = await axios.get(`${API_URL}/3/movie/${id}?${API_KEY}`)
    return response.data;
  }


  return (
    <SearchContext.Provider value={{API_URL, listTitle, movieList, getMovieListByTerm, getMovieListByGender, getMovieById}}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;