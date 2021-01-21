import React, { useContext } from 'react';
import { MovieContext } from '../components/MovieContext';
import { Grid, Container } from '@material-ui/core';
import '../App.css';

import Movie from './Movie';
const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <Container maxWidth="sm">
      <ul>
        {movies.map((movie) => (
          <Movie key={movie.id} name={movie.name} price={movie.price} />
        ))}
      </ul>
    </Container>
  );
};

export default MovieList;
