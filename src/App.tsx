import React, { useEffect, useState } from 'react';
import './App.css';
import { Display } from './Display';
import { MyButton } from './MyButton/MyButton';
import { SettingsDisplay } from './SettingsDisplay/SettingsDisplay';

export type StatePropsType = {
  count: number
  maxValue: number
  startValue: number
  incDisabled: boolean,
  resetDisabled: boolean,
  setDisabled: boolean,
  numbersOnChange: boolean,
  inCorrectValue: boolean
}

function App() {

  const [state, setState] = useState<StatePropsType>({
    count: 0,
    maxValue: 1,
    startValue: 0,
    incDisabled: false,
    resetDisabled: false,
    setDisabled: false,
    numbersOnChange: false,
    inCorrectValue: false
  })
  const [displayButtonClicked, setDisplayButtonClicked] = useState(false)

  useEffect(() => {
    let stateAsString = localStorage.getItem('myState')
    if (stateAsString) {
      let newState = JSON.parse(stateAsString)
      setState(newState)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('myState', JSON.stringify(state))
  }, [displayButtonClicked])

  const increment = () => {
    if (state.count < state.maxValue) {
      setState({
        ...state,
        count: state.count + 1
      })
    }
    if (state.count + 1 === state.maxValue) {
      setState({
        ...state,
        count: state.count + 1,
        incDisabled: true
      })
    }
  }

  const reset = () => {
    setState({
      ...state,
      count: state.startValue,
      incDisabled: false
    })
  }

  const changeMaxValue = (maxValue: number) => {
    setState({
      ...state,
      maxValue: Number(maxValue),
      setDisabled: false,
      resetDisabled: true,
      incDisabled: true,
      numbersOnChange: true,
    });
    if (state.startValue >= maxValue || state.startValue < 0) {
      setState({
        ...state,
        maxValue: Number(maxValue),
        setDisabled: true,
        incDisabled: true,
        resetDisabled: true
      })
    }
  }

  const changeStartValue = (startValue: number) => {
    setState({
      ...state,
      startValue: Number(startValue),
      setDisabled: false,
      resetDisabled: true,
      incDisabled: true,
      numbersOnChange: true,
    });
    if (startValue >= state.maxValue || startValue < 0) {
      setState({
        ...state,
        startValue: Number(startValue),
        setDisabled: true,
        incDisabled: true,
        resetDisabled: true
      })
    }
  }

  const onSetValue = () => {
    debugger
    setState({
      ...state,
      count: state.startValue,
      setDisabled: true,
      resetDisabled: false,
      incDisabled: false,
      numbersOnChange: false
    });
    setDisplayButtonClicked(true)
  }

  // const incButtonErrorClass = (state.count === state.maxValue ? 'error' : '')

  return (
    <div className='container'>
      <div className='App'>
        <Display count={state.count} maxValue={state.maxValue} numbersOnChange={state.numbersOnChange}
          setDisabled={state.setDisabled} startValue={state.startValue} />
        <div className='buttons'>
          <MyButton name='inc' onClick={increment} disabled={state.incDisabled} />
          <MyButton name='reset' onClick={reset} disabled={state.resetDisabled} />
        </div>
      </div>

      <div className='App'>
        <div >
          <SettingsDisplay maxValue={state.maxValue}
            startValue={state.startValue}
            count={state.count}
            changeMaxValue={changeMaxValue}
            changeStartValue={changeStartValue} />
        </div>
        <div className='buttons'>
          <MyButton name='set' onClick={onSetValue} disabled={state.setDisabled} />
        </div>
      </div>
    </div>
  )
}

export default App;
