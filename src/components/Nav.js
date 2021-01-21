import React, { useContext } from 'react';
import '../App.css';
import { MovieContext } from '../components/MovieContext';

const Nav = () => {
  const [movies] = useContext(MovieContext);
  return (
    <div className="nav">
      <h1>Yonas</h1>
      <h2>List of Movies: {movies.length}</h2>
    </div>
  );
};

export default Nav;
