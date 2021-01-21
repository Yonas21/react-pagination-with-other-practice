import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      id: 12321,
      name: 'Vikings',
      price: `10`,
    },
    {
      id: 12398,
      name: 'Game of Thrones',
      price: `15`,
    },
    {
      id: 45290,
      name: 'Vikings',
      price: `10`,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
