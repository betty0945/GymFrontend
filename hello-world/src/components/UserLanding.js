import React, { Component } from 'react'
import './MyStyle.css'
import ChildComponent from './ChildComponent'


class UserLanding extends Component {

    render() {
        let ClassName = this.props.primary ? 'primary' : '';

        return (

            <div className="background">
                <h1 className={`${ClassName} font-xl`}> Welcome  Users! </h1>
                <h4> Look for trainers 🔍</h4>
                <h4> Search a workout 💪🏼</h4>
                <h4> Send message to Trainer💬</h4>


            </div>


        );

    }

}
export default UserLanding;