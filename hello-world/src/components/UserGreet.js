import React, { Component } from 'react'

 class UserGreet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
    
  render() {
    return 
    //   this.state.isLoggedIn  && <div> Welcome Betty</div> 
    //   return this.state.isLoggedIn ? (
    //     <div>  Welcome Betty </div> )
    //     :(
    //         <div> Welcome Guest</div> 
    //     )


    // let message 
    // if(this.state.isLoggedIn){
    //     message = <div>  Welcome Betty </div>
    // }
    // else{
    //     message = <div> Welcome Guest</div> 
    // }
    // return <div>{message}</div>
    // if (this.state.isLoggedIn){
    //     return
    //         <div>  Welcome Betty </div>
        
    // } else {
    //     return <div> Welcome Guest</div> 
    // }

    // return (
    //   <div>
    //         <div>  Welcome Betty </div>
    //         <div> Welcome Guest</div> 
    //   </div>
    // )
  }
}

export default UserGreet
