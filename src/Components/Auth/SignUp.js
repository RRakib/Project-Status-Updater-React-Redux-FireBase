import React, { Component } from 'react'
import "./Auth.css"
class SignUp extends Component {
    state = {
        firstName : "",
        lastName: "",
        email : "",
        password : ""
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
            email : "",
            password : "",
            firstName : "",
            lastName : ""
        })
     }

  render() {
    return (
      <div className="signIn">
        <div className="container">
        <form onSubmit={this.handleSubmit}>
            <h5 className="title">Sign Up</h5>
            <input 
                className="input"
                type="text"
                name="firstName"
                placeholder="Enter FirstName..."
                onChange={this.handleChange}
                value= {this.state.firstName}
            />
            <br />
            <input 
                className="input"
                type="text"
                name="lastName"
                placeholder="Enter LastName..."
                onChange={this.handleChange}
                value= {this.state.lastName}
            />
            <br />
            <input 
                className="input"
                type="email"
                name="email"
                placeholder="Enter Email..."
                onChange={this.handleChange}
                value= {this.state.email}
            />
            <br />
            <input 
                className="input"
                type="password"
                name="password"
                placeholder="Enter Password..."
                onChange={this.handleChange}
                value= {this.state.password}
            />
            <br />
            <button>Register</button>
        </form>
        </div>
      </div>
    )
  }
}

export default SignUp
