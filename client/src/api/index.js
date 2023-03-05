import axios from 'axios';

const url = `http://localhost:5000/posts`;


export const fetchPost = () => axios(url);
export const createPost = (newPost) => axios(url, newPost);