import * as api from '../api/index';

//Action Creators

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPost();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.fetchPost(post);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}