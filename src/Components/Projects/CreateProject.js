import React, { Component } from 'react'
import { connect } from "react-redux";
import { createProject } from "../../Store/Actions/projectAction"
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
        this.props.createProject(this.state)
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

const mapStoreToProsp= (state) => {
    return state
}


const mapDispatchToProps = (dispatch) => {
    return{
        createProject : (project) => dispatch(createProject(project))
    }
}


export default connect(mapStoreToProsp , mapDispatchToProps)(CreateProject)
