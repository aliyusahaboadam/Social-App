import initialState from "./initialState";
import * as actionTypes from './actionTypes';
import { combineReducers} from 'redux';


export default function postReducer (state = initialState, action) {
    
    switch(action.type) {

         case actionTypes.postType.GET: {

            return {
                ...state,
                posts: action.payload
            }
         }

         case actionTypes.postType.CREATE: {

            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
         }

         case actionTypes.postType.LIKE: {
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id !== action.payload){
                        return post
                    }

                    return {
                        ...post,
                        like: post.like + 1
                    }
                })
            }
         }

         case actionTypes.postType.UNLIKE: {
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id !== action.payload) {
                        return post
                    }

                    return {
                        ...post,
                        unlike: post.unlike + 1
                    }
                })
            }
         }
         

         default:
            return state;
      }
}


export const rootReducer = combineReducers({
    posts: postReducer
});