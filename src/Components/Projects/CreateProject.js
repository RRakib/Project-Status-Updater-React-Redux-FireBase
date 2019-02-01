import React, { Component } from 'react'
import "./Project.css"
class CreateProject extends Component {
    state = {
        title : "",
        content: "",
    }

    handleChange = (e) => {
        const {name , value} = e.target;
        this.setState({
            [name] : value
        })
     }
     handleSubmit = (e) => {
         e.preventDefault();
        console.log(this.state)
        this.setState({
            title : "",
            content : "",
        })
     }

  render() {
    return (
      <div className="createProjects">
        <div className="container">
        <form onSubmit={this.handleSubmit}>
            <h5 className="title">Add Update Status</h5>
            <input 
                className="input"
                type="text"
                name="title"
                placeholder="Enter Title..."
                onChange={this.handleChange}
                value= {this.state.title}
            />
            <br />
            <textarea 
                className="input"
                type="text"
                name="content"
                placeholder="Enter Content..."
                onChange={this.handleChange}
                value= {this.state.content}
            />
            <br />
            <button>Add</button>
        </form>
        </div>
      </div>
    )
  }
}

export default CreateProject
