import React, { useContext } from 'react';

import SearchContext from '../../context/Search';

import {
  Tag,
  Name
} from './styles';

export function GenreItem({ genre }) {
  const { getMovieListByGender } = useContext(SearchContext);

  return (
    <Tag onClick={() => getMovieListByGender(genre.id, genre.name)}>
      <Name title={genre.name}>{genre.name}</Name>   
    </Tag>
  )
}