import { useContext, useEffect } from 'react';

import SearchContext from '../../context/Search';

import { GenreList } from "../../components/GenreList";
import { MovieList } from '../../components/MovieList';

import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  const { getPopularMovies, listTitle, language } = useContext(SearchContext);
  
  useEffect(() => {
    getPopularMovies()
  }, [language]);

  return (
    <>
      <GenreList />
      <MovieList page="home" title={listTitle} />
    </>
  );
}
