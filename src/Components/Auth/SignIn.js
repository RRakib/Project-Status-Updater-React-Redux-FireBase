import React, { Component } from 'react'
import "./Auth.css"
class SignIn extends Component {
    state = {
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
            password : ""
        })
     }

  render() {
    return (
      <div className="signIn">
        <div className="container">
        <form onSubmit={this.handleSubmit}>
            <h5 className="title">Sign In</h5>
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
            <button>Submit</button>
        </form>
        </div>
      </div>
    )
  }
}

export default SignIn
