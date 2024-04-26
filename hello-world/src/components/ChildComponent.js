import React from 'react'

 function childComponent(props) {
  return (
    <div>
      <button className="button" onClick={() => props.greetHandler('child')}>Sign up</button>
      <button className="button" onClick={() => props.greetHandler('child')}>Sign In</button>
    </div>
  )
}

export default childComponent