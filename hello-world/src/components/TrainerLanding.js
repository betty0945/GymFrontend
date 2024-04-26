import React, { Component } from 'react'
import './MyStyle.css'
import ChildComponent from './ChildComponent'


class TrainerLanding extends Component {
   
    render() {
        let ClassName = this.props.primary ? 'primary' : '';

        return (

            <div className="background">
                <h1 className={`${ClassName} font-xl`}> Welcome  Trainers! </h1>
                <h4> Look for user 🔍</h4>
                <h4> Search a workout 💪🏼</h4>
                <h4> Edit user info ℹ️</h4>
                <h4> Add user 👤</h4>
                <h4> Send message to user 💬</h4>
                <h4> Remove user ✂️ </h4>

                

            </div>


        );

    }

}
export default TrainerLanding;