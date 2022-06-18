import React from 'react'

function Alert(props) {
  return (
  props.Alert &&  <div className="container-my-3">
    <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
    {props.Alert.type} <strong>{props.Alert.msg}</strong>
    
  </div>
  </div>
  )
}

export default Alert