import React from "react";

type DisplayPropsType = {
  count: number
  maxValue: number
  startValue: number
  numbersOnChange: boolean
  setDisabled: boolean
}

export const Display = (props: DisplayPropsType) => {

  const errorClass = (props.count === props.maxValue ? 'error' : '')
  const incorrectValue = <span className='incorrectValue'>Incorrect value!</span>
  const count = props.numbersOnChange ?
    <span className='displaySpan'>enter values and press 'set'</span>
    : props.count

  const resultCount = (props.startValue < 0 || props.startValue >= props.maxValue) ?
    incorrectValue : count

  return (
    <div className='counter'>
      <div className={errorClass}>
        {resultCount}
      </div>
    </div>
  )
}