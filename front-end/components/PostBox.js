import React, {Component} from "react";
import Post from "./Post"; 
import { getPost } from "../redux/action";
import { connect } from 'react-redux';
import CreatePost from "./CreatePost";
import Reactions from "./Reactions";
import PostReaction from "./PostReaction";

class PostBox extends Component {
          
      componentDidMount() {
         this.props.getPost();
      }
    
    render() { 
        return (

            <div>
               {
                  this.props.posts.map(function(post) {
                       return(
                           <div className="post">
                              <PostReaction
                               key={post.id}
                               postId={post.id}
                               like={post.like}
                               unlike={post.unlike}
                               comments={post.comments !== null ? post.comments.length : 0}
                              
                              />
                              <Post
                                key={post.id}
                                user={post.user}
                                content={post.content}
                              />
                           </div>

                       );
                  })
               }

               <CreatePost/>
            </div>

        );
    }
}

 const mapDispatchToProps = { getPost }
 
 const mapStateToProps = (state) => {
   return {posts: state.posts}
 }
 
export default  connect(mapStateToProps, mapDispatchToProps)(PostBox);