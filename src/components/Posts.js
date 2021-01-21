import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    width: '70%',
    justifyContent: 'center',
    margin: '5%',
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

const Posts = ({ posts, loading }) => {
  const classes = useStyles();
  if (loading) {
    return <CircularProgress className={classes.root} />;
  }
  console.log(posts);
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <List component="nav" aria-label="secondary mailbox folders">
            {posts.map((post, index) => (
              <ListItem key={index} className={classes.list}>
                <ListItemText primary={post.body}></ListItemText>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default Posts;
