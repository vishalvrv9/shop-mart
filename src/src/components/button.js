import React from 'react'

const Button = ({MinusButton, ButtonFunction}) => {
  if (MinusButton) {
    return(
      <button type="button" className="btn btn-default" onClick={ButtonFunction}>
        {'-'}
      </button>
      )    
  }
  else {
    return(
      <button type="button" className="btn btn-default" onClick={ButtonFunction}>
        {'+'}
      </button>
      )    
  }

}

export default Button
