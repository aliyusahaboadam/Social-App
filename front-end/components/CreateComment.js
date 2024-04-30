import { Component } from "react";
class CreateComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            content: ""
        }

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

      handleUserChange(event){
        const value = event.target.value;
        this.setState({
            user: value
        })
      }

      handleTextChange(event){
        const value = event.target.value;
        this.setState({
            content: value
        })
      }

      handleSubmit(event){
        event.preventDefault();
          console.log(JSON.stringify(this.state));
        this.props.onCommentSubmit({
            user: this.state.user.trim(),
            content: this.state.content.trim()
        })

        this.setState({
            user: "",
            content: ""
        })

      }
    
    render() { 
        return ( 

              <div className="comment-form">
                <h3>Add Comment</h3>
                  <form
                   onSubmit={this.handleSubmit}
                  >
                   <input
                     type="text"
                     placeholder="Your Name"
                     required
                     value={this.state.user}
                     onChange={this.handleUserChange}
                   />

                   <br></br>

                    <textarea
                     row="3"
                     placeholder="Write your comment here..."
                     required
                     value={this.state.content}
                     onChange={this.handleTextChange}
                    ></textarea>

                    <br></br>

                    <input type="submit" value="Comment"/>

                  </form>
              </div>
         );
    }
}
 
export default CreateComment;