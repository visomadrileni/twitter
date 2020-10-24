import auth from './auth';
import post from './post';
import profile from './profile';
import error from './error';
import {combineReducers} from 'redux';

export default combineReducers({
    auth,
    post,
    profile,
    errors:error
})