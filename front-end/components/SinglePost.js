import { Component } from "react";
import { withRouter } from "./withRouter";
import API from "../API";
import Reactions from './Reactions';
import Post from './Post';
import CreateComment from "./CreateComment";
import Comment from "./Comment";


class SinglePost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.params.id,
            user: "",
            content: "",
            like: 0,
            unlike: 0,
            comments: []
        }

        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    componentDidMount(){
       API.getPostById(this.state.id).then((res) => {
          let post = res.data;

            this.setState({
                user: post.user,
                content: post.content,
                like: post.like,
                unlike: post.unlike,
                comments: post.comments
            })
       })
    }

    handleCommentSubmit(comment){
        const comments = this.state.comments;

        const newComments = comments.concat([comment])

        this.setState({
            comments: newComments
        })

        API.updateComment(this.state.id, comment);
    }
   
    render() { 
        return ( 

            <div className="post">
                <Reactions
                 like={this.state.like}
                 unlike={this.state.unlike}
                 comments={this.state.comments.length}
                />

                <Post
                  user={this.state.user}
                  content={this.state.content}
                />

               <CreateComment
               onCommentSubmit={this.handleCommentSubmit}
               /> 

               {
                 this.state.comments.map(function(comment) {

                     return(

                        <Comment
                         user={comment.user}
                         content={comment.content}
                        
                        />
                     );
                 })
               }


                  
            </div>
          );
    }
}
 
export default (withRouter)(SinglePost);