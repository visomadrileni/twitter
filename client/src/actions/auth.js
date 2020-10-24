import {GET_ERRORS,SET_CURRENT_USER} from './types';
import {get,post} from 'axios';
import setAuthHeaders from '../utils/setAuthHeader';

export const loginUser = userData => dispatch => {
   post('/users/login',userData).then(res => {
       const {token} = res.data;
       localStorage.setItem('jwtToken',token);
       setAuthHeaders(token);
       dispatch(getCurrentUser());
   }).catch(err => {
       dispatch({
           type: GET_ERRORS,
           payload: err.response.data
       })
   })
}

export const register = (userData,history) => dispatch => {
    post('/users/register',userData).then(res => {
        history.push('/login')}).catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }) 
}

export const getCurrentUser = () => dispatch => {
    get('/users').then(res => dispatch(setCurrentUser(res.data)))
}

export const setCurrentUser = data => {
    return {
        type: SET_CURRENT_USER,
        payload: data
    }
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthHeaders();
    dispatch(setCurrentUser());
}