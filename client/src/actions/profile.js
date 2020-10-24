import {GET_PROFILE,LOAD_PROFILE,GET_POSTS,LOADING_POSTS,FOLLOW,UNFOLLOW} from './types';
import {get,post} from 'axios';

export const getUserProfile = userId => dispatch => {
    dispatch({type:LOAD_PROFILE});
    get(`/users/${userId}`,userId).then(res => {
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    }).catch(err => console.log(err));
}

export const refreshUserProfile = userId => dispatch => {
    get(`/users/${userId}`,userId).then(res => {
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    }).catch(err => console.log(err));
}

export const getPostsByUserId = userId => dispatch => {
    dispatch({type:LOADING_POSTS});
    get(`/posts/${userId}`).then(res => {
        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    }).catch(err => console.log(err))
}

export const followUser = userId => dispatch => {
    post('/users/follow',userId).then(res => {
        dispatch({
            type: FOLLOW,
            payload: res.data.userId
        })
    }).catch(err => console.log(err))
}

export const unfollowUser = userId => dispatch => {
    post('/users/unfollow',userId).then(res => {
        dispatch({
            type: UNFOLLOW,
            payload: res.data.userId
        })
    }).catch(err => console.log(err))
}

export const searchUser = (searchData,history) => {
    get('/users/search',searchData).then(res => {
        history.push(`/profile/${res.data.userId}`);
    }).catch(err => history.push('/search'));
}