import {SET_CURRENT_USER,FOLLOW,UNFOLLOW} from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user: null
}

export default (state=initialState,action) => {
    let pl = action.payload;
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: Object.keys(pl).length !== 0,
                user:pl
            }

        case FOLLOW:
            return {
                ...state,
                user: {
                    ...state.user,
                    following: [...state.user.following,pl]
                }
            }   
            
       case UNFOLLOW:
           return {
               ...state,
               user: {
                   ...state.user,
                   following: state.user.following.filter(f => f !== pl)
               }
           } 
           
         default:
             return state;  
    }
}