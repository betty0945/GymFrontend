//import React from "react";
import React, { Component } from 'react'

class Subscribe extends Component {
    constructor(){
        super()
        this.state={
            message:'CLick here to Subscribe'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thank you for Subscribing'
        })
    }
    render() {
        return (
        <div>
         < h1 > { this.state.message }   </h1 >
            <button onClick={() =>this.changeMessage()}> Subscribe</button>
            </div>
        )
        
            
    }

}
export default Subscribe