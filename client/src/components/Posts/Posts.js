import React from 'react';
import Post from './Post/Post';
import useStyle from './styles';


const Posts = () => {
    const classes = useStyle();
    return (
        <>
            <h1 className={classes.mainContainer}>POSTS</h1>
            <Post />
            <Post />
        </>

    )
}

export default Posts;