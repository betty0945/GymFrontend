import React, { Component } from 'react'

 class ClassClick extends Component {
    clickHadler(){
        console.log('Clicked the buttion')
    }
  render() {
    return (
      <div>
       <button onClick={this.clickHadler}>Click me</button> 
      </div>
    )
  }
}

export default ClassClick
