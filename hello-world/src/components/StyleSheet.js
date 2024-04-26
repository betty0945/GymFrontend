import React from 'react'
import './MyStyle.css'

function StyleSheet(props) {
    let ClassName=props.primary ? 'primary':''
  return (
    <div>
          <h1 className={`${ClassName} font-xl`}> Gym Star Software</h1>
          {/* <h1 className={ClassName}> Gym Star Software</h1> */}

          <h2>Sign up or Sign in</h2>
        </div>
  )
}

export default StyleSheet