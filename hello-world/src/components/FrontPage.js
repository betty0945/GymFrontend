import React, { Component } from 'react'
import './MyStyle.css'
import ChildComponent from './ChildComponent' 


class FrontPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

     render(){
         let ClassName = this.props.primary ? 'primary' : '';

    return (
        
            <div className="background">
            <h1 className={`${ClassName} font-xl`}> Welcome to Gym Star App! 🏋️ </h1>
            <h2>Sign up or Sign in</h2>
            <ChildComponent greetHandler={this.greetParent} />

        </div>

        
    );

}

}
export default FrontPage;