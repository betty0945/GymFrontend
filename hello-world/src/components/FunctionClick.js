import React, { Component } from 'react'

 function FunctionClick() {
 
    function clickHadler(){
      //function clickHandler(){
        console.log('Button Clicked')
      }

    
    return (
      <div>
        <button onClick={clickHadler}> Click </button>
      </div>
    )
  
  }


export default FunctionClick
