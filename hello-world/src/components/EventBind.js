import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        message:'Hello'
         
      }
    }
    // clickHandler(){
    //     this.setState({
    //         message:'Goodbye!'
    //     })
    //    console.log(this)
    // }
    clickHandler =() =>{
        this.setState({
                message:'Goodbye!'
            })

    }
    //this key word is undified
  render() {
    return (
      <div>
            <div> {this.state.message} </div>
         {/* <button onClick={this.clickHandler.bind(this)}>Click </button> */}
           {/* <button onClick={()=>this.clickHandler()}>Click </button>  */}
           <button onClick={this.clickHandler}>Click </button>
      </div>
    )
  }
}

export default EventBind
