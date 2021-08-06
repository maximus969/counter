import React, { ChangeEvent } from "react";
import s from './MyInput.module.css'

type MyInputPropsType = {
  name: string
  value: number
  onChange: (value: number) => void
  isIncorrectClass: boolean
}

export const MyInput = (props: MyInputPropsType) => {

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value
    props.onChange(Number(value))
  }

  const inputClass = props.isIncorrectClass ? s.errorInput : s.input

  return (
    <div className={s.inputClass}>
      <span className={s.span}>{props.name}</span>
      <input className={inputClass} value={props.value} onChange={onChange} type='number' />
    </div>
  )
}