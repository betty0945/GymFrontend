import React, { Component } from 'react'

 class Signup extends Component {

    constructor(props){
        super(props)

        this.state ={
            Username : '',
            UserPassword:'',
            email :'',
            Sex:"Male"
        }
    }
     handleUsernameChange = (event) => {
        this.setState({
            username : event.target.value
        })
      }
       handlePasswordChange = (event) => {
         this.setState({
           userPassword: event.target.value
         })

     }
     handleCommentsChange = event=>{
        this.setState({
            email:event.target.value

        })

     }
     handleTopicChange = event =>{
        this.setState({
            topic:event.target.value

        })
     }
     handleSubmit = event => {
         alert(`${this.state.username} ${this.state.email} ${this.state.topic} ${this.state.password}`)
         event.preventDefault()
     }
     

  render() {
    const { username,password, email,topic }=this.state
    return (
      <div> 
         <h1>Sign up here </h1>
        

        <form onSubmit={this.handleSubmit}>
          
      <div>
            <label>Full Name</label> 
            <input 
            type="text" 
            value={username} 
            onChange={this.handleUsernameChange}
             />

      </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            value={password}
            onChange={this.handlePasswordChange}
          />

        </div>
      
      <div>
        <label>Email</label>
        <textarea 
        type="text"
        value={email}
         onChange={this.handleCommentsChange}
        />

      </div>
      <div>
        <label> Sex</label>
        <select value={topic} onChange={this.handleTopicChange}>
            <option value="Male">Male</option>
            <option value="female">Female</option>
            <option value="non-Binary">non-Binary</option>
        </select>
      </div>
      <button type="submit">Submit</button>
        </form>
        </div>
    )
  }
}

export default Signup
