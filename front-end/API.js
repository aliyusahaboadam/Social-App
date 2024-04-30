import axios from "axios";

  const SOCIAL_API_BASE_URL = 'http://localhost:8080/social/api';

class API {

    getPosts() {
        return axios.get(SOCIAL_API_BASE_URL + '/posts');
    }

    createPost(requestData) {
      return axios.post(SOCIAL_API_BASE_URL + '/add-post', requestData);
    }
    
   updateLikes(id, like){
    return axios.put(SOCIAL_API_BASE_URL + '/likes' + '/' + id + '/' + like);
   }

   updateUnlikes(id, unlike){
    return axios.put(SOCIAL_API_BASE_URL + '/unlikes' + '/' + id + '/' + unlike);
   }

   getPostById(id){
    return axios.get(SOCIAL_API_BASE_URL + '/post' + '/' + id);
   }

   updateComment(id, comment){
     return axios.put(SOCIAL_API_BASE_URL + '/comment' + '/' + id, comment)
   }

}

export default new API();