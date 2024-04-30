import React, {Component} from "react";

class Post extends Component {
    
    render() { 
        return (


            <div>
                   <h2>{this.props.user}</h2>
                   <p>{this.props.content}</p>
            </div>
        );
    }
}
 
export default Post;