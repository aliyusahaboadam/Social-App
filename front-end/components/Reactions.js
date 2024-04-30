import React, {Component} from "react";
class Reactions extends Component {
    state = {  } 
    render() { 
        return (
                
            <div className="post-icons">
                    <span onClick={this.props.onLike}>&#128077;</span>
                    <span className="like-count">{this.props.like}</span>
                    <span onClick={this.props.onUnlike}>&#128078;</span>
                    <span className="dislike-count" >{this.props.unlike}</span>
                    <span onClick={this.props.onComment}>&#128172;</span>
                    <span className="comment-count">{this.props.comments}</span>

            </div>
           
        );
    }
}
 
export default Reactions;