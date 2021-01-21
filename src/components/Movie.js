import React from 'react';
import '../App.css';
import { Grid } from '@material-ui/core';
const Movie = ({ name, price }) => {
  return (
    <Grid
      className="singleMovie"
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <h3>{name}</h3>
      <p>${price}</p>
    </Grid>
  );
};

export default Movie;
