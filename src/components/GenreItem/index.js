import React from 'react';
import {
  Tag,
  Name
} from './styles';

export function GenreItem({ name }) {
  return (
    <Tag>
      <Name title={name}>{name}</Name>   
    </Tag>
  )
}