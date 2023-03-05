import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyle from './styles';


const Posts = () => {
    const classes = useStyle();
    const posts = useSelector((state) => state.posts)
    console.log(posts);
    return (
        <>
            !posts.length ?<CircularProgress />:(
            <Grid className={classes.container} container alignContent='stretch' spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}></Grid>
                ))}
            </Grid>
            )
            <h1 className={classes.mainContainer}>POSTS</h1>
            <Post />
            <Post />
        </>

    )
}

export default Posts;