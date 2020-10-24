import {ADD_POST,GET_POSTS,LOADING_POSTS} from '../actions/types';

const initialState = {
    list: null,
    loading: false
}

export default (state=initialState,action) => {
    let pl = action.payload;
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                list: [...state.list,pl]
            }

        case LOADING_POSTS:
            return {
                ...state,
                loading: true
            }   
            
        case GET_POSTS:
            return {
                ...state,
                loading: false,
                list: pl
            } 
            
        default: 
           return state;    
    }
}