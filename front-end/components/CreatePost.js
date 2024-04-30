import React, { Component } from "react";
import { addPostAction } from "../redux/action";
import { connect } from "react-redux";

class CreatePost extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            content: ''
        }

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleUserChange(event){
     const value = event.target.value;
     this.setState(() => ({
        user: value
     }))
    }

    handleContentChange(event){
        const value = event.target.value;
        this.setState(() => ({
        content: value
     }))
    }

    handleSubmit(event) {
       event.preventDefault();
       

         this.props.addPostAction(this.state);
       
       this.setState(() => ({
        user: '',
        content: ''
       }))
       
    }
 
    render() { 
        return ( 
           
            <div className="post-form">
                <h2>Create Post</h2>
                 
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

                       <textarea
                        placeholder="Write your post here..."
                        rows="4"
                        required
                        value={this.state.content}
                        onChange={this.handleContentChange}
                       ></textarea><br></br>

                       <input
                         type="submit"
                         value="Post"
                       />

                 </form>

            </div>

         );
    }
}

 const mapDispatchToProps = { addPostAction }
 
export default  connect(null, mapDispatchToProps)(CreatePost);