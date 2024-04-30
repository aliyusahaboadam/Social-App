import * as actionTypes from './actionTypes';
import API from '../API';

export function getAllAvailablePost (post) {
    return {
      type: actionTypes.postType.GET,
      payload: post
    };
}

 export function getPost() {
     return dispatch => {
       API.getPosts().then(res => {
           dispatch(getAllAvailablePost(res.data));
           console.log('Data Fetched from DB' + JSON.stringify(res.data));
       })
       .catch(error => {
           console.error('Error While fetching Data: ' + error)
       })
     };
 }

 export function addPost (post) {
  return {
    type: actionTypes.postType.CREATE,
    payload: post
  }
 }

 export function addPostAction(post) {
  return dispatch => API.createPost(post).then(newPost => {
      dispatch(addPost(newPost.data));
  })
 }

 export function likeAction(postId, like) {
  API.updateLikes(postId, like).catch(error => {
    console.error('Error Updating Like: ' + error)
  });
  return {
    type: actionTypes.postType.LIKE,
    payload: postId
  }
 }


 export function unlikeAction(postId, unlike) {
  API.updateUnlikes(postId, unlike).catch(error => {
    console.error('Error Updating unlike: ' + error)
  });
  return {
    type: actionTypes.postType.UNLIKE,
    payload: postId
  }
 }





















