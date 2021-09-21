import React from "react";
import s from './MyButton.module.css'

type MyButtonType = {
  name: string
  onClick: () => void
  disabled: boolean
}

export const MyButton = (props: MyButtonType) => {

  const errorClass = props.disabled ? `${s.buttonError}` : `${s.button}`

  const onClick = () => {
    props.onClick()
  }

  return (
    <div>
      <button className={errorClass} onClick={onClick} disabled={props.disabled} >
        {props.name}
      </button>
    </div>
  )
}