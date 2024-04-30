import Reactions from "./Reactions";
import { Component } from "react";
import { likeAction } from "../redux/action";
import { unlikeAction } from "../redux/action";
import { connect } from "react-redux";
import { withRouter } from "./withRouter";



class PostReaction extends Component {
    constructor(props) {
        super(props);
       
        this.openPost = this.openPost.bind(this);
    }

     openPost(id){
        this.props.navigate(`/post/${id}`);
     }
    

    render() { 
         const {postId, like, unlike, comments} = this.props;
        return ( 
              <div>

                             <Reactions
                                onLike={() => this.props.likeAction(postId, like)}
                                onUnlike={() => this.props.unlikeAction(postId, unlike)}
                                onComment={() => this.openPost(postId)}
                                like={like}
                                unlike={unlike}
                                comments={comments}
                              />
              </div>
         );
    }
}

const mapDispatchToProps = {likeAction, unlikeAction}
 
export default (withRouter)(connect(null, mapDispatchToProps)(PostReaction));