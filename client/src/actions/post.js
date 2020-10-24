import {ADD_POST,GET_POSTS,LOADING_POSTS} from './types';
import {get,post} from 'axios';

export const addPost = postData => dispatch => {
    post('/posts/add',postData).then(res => {
        dispatch({
            type: ADD_POST,
            payload: res.data
        })
    }).catch(err => console.log(err))
}

export const getPosts = () => dispatch => {
    dispatch({ type:LOADING_POSTS});
    get('/posts').then(res => {
        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    }).catch(err => console.log(err))
}

export const getPostsByUser = () => dispatch => {
    get('/posts/following').then(res => {
        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    }).catch(err => console.log(err))
}