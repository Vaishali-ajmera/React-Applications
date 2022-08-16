import React from 'react'

export default function About(props) {
  return (
    <div style = {{color: props.mode==='dark'?'white':'#042743'}}>
      <h1 > Hello World!!</h1>
    </div>
  )
}
