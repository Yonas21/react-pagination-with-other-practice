import React, { useState, useContext } from 'react';
import { MovieContext } from '../components/MovieContext';
import {
  Button,
  FormControl,
  Input,
  FormGroup,
  makeStyles,
  Container,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    border: '1px solid lightgray',
    alignSelf: 'center',
    padding: '10vh',
    marginTop: '5vh',
  },
  input: {
    padding: '3vh',
    margin: 'auto 1vh',
  },
  add_btn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginTop: '20px',
    // width: '50%',
    alignSelf: 'left',
  },
});

const AddMovie = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [movies, setMovies] = useContext(MovieContext);

  const classes = useStyles();

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
  };
  return (
    <Container maxWidth="sm" className={classes.root}>
      <FormGroup>
        <FormControl>
          <Input
            className={classes.input}
            name="name"
            value={name}
            onChange={updateName}
            placeholder="Enter Name"
          />
        </FormControl>
        <FormControl>
          <Input
            className={classes.input}
            name="price"
            value={price}
            onChange={updatePrice}
            placeholder="Enter Price"
          />
        </FormControl>

        <FormControl>
          <Button className={classes.add_btn} onClick={addMovie}>
            Primary
          </Button>
        </FormControl>
      </FormGroup>
    </Container>
  );
};

export default AddMovie;
