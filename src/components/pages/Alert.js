import React from 'react'
import {stringCapitalize} from '../../functions/UtilityFunction.js'
const Alert = (props) => {
    
  return (
    props.alertMessage && <div>
        <div className={`alert alert-${props.alertMessage.type}`} role="alert">
            { stringCapitalize(props.alertMessage.type)} : {props.alertMessage.msg}
        </div>
    </div>
  )
}

export default Alert