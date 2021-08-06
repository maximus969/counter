import React from "react";
import { MyInput } from "../MyInput/MyInput";

type SettingsDisplayPropsType = {
  maxValue: number
  startValue: number
  count: number
  changeMaxValue: (maxNumber: number) => void
  changeStartValue: (startValue: number) => void

}

export const SettingsDisplay = (props: SettingsDisplayPropsType) => {

  const onChangeMaxValue = (value: number) => {
    let maxValue = value
    props.changeMaxValue(maxValue)
  }

  const onChangeStartValue = (value: number) => {
    let startValue = value
    props.changeStartValue(startValue)
  }

  const isIncorrectClass = props.startValue < 0 || props.startValue >= props.maxValue

  return (
    <div className='settingsDisplay'>
      <MyInput name='max value:' value={props.maxValue} onChange={onChangeMaxValue} isIncorrectClass={isIncorrectClass} />
      <MyInput name='start value:' value={props.startValue} onChange={onChangeStartValue} isIncorrectClass={isIncorrectClass} />
    </div>
  )
}