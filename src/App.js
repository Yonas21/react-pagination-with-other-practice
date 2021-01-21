import './App.css';
import { useEffect, useState } from 'react';
// import MovieList from './components/MovieList';
// import Nav from './components/Nav';
// import { MovieProvider } from './components/MovieContext';
// import AddMovie from './components/AddMovie';
import { makeStyles } from '@material-ui/styles';

// import components
import Posts from './components/Posts';
import Paginate from './components/Paginate';

import axios from 'axios';
const useStyles = makeStyles({
  root: {
    width: '70%',
    alignItems: 'center',
  },
  card: {
    marginBottom: '20px',
  },
  list: {
    display: 'block',
    padding: '20px',
    margin: '10px',
    backgroundColor: 'lightgrey',
    borderRadius: '1%',
  },
});

const App = () => {
  const classes = useStyles();
  const [posts, setposts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(20);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const url = `https://jsonplaceholder.typicode.com/posts`;
      const response = await axios.get(url);
      setposts(response.data);
      setLoading(false);
    };

    getData();
  }, []);

  // Get current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const IndexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(IndexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setcurrentPage(pageNumber);

  // console.log(posts)
  return (
    // <MovieProvider>
    //   <div className="App">
    //     {/* <Nav />
    //     <AddMovie />
    //     <MovieList /> */}
    //   </div>
    // </MovieProvider>
    <div className={classes.root}>
      <Posts posts={currentPosts} loading={loading} />
      <Paginate
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        changePages={paginate}
      />
    </div>
  );
};

export default App;
