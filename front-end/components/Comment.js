import { Component } from "react";
class Comment extends Component {
  
    render() { 
        return (
            <div className="comment">
                 <h3>{this.props.user}</h3>
                 <p>{this.props.content}</p>
            </div>
        );
    }
}
 
export default Comment;