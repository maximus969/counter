import './App.css';
import { Display } from './Display';
import { MyButton } from './MyButton/MyButton';
import { SettingsDisplay } from './SettingsDisplay/SettingsDisplay';
import { saveState } from './utils/localstorage.utils';


function App(props: any) {

  const increment = () => {
    if (props.state.count + 1 === props.state.maxValue) {
      props.disableIncrementButton()
    } else if (props.state.count < props.state.maxValue) {
      props.increaseValue()
    }
  }

  const reset = () => {
    props.resetDisplayValue()
  }

  const changeMaxValue = (maxValue: number) => {
    props.changeMaxValueWithoutError(Number(maxValue))
    if (props.state.startValue >= maxValue || props.state.startValue < 0) {
      props.changeMaxValueWithError(Number(maxValue))
    }
  }

  const changeStartValue = (startValue: number) => {
    props.changeStartValueWithoutError(Number(startValue))
    if (startValue >= props.state.maxValue || startValue < 0) {
      props.changeStartValueWithError(Number(startValue))
    }
  }

  const onSetValue = () => {
    props.setValues()
    saveState({
      counter: props.state
    })
  }


  return (
    <div className='container'>
      <div className='App'>
        <Display count={props.state.count} maxValue={props.state.maxValue} numbersOnChange={props.state.numbersOnChange}
          setDisabled={props.state.setDisabled} startValue={props.state.startValue} />
        <div className='buttons'>
          <MyButton name='inc' onClick={increment} disabled={props.state.incDisabled} />
          <MyButton name='reset' onClick={reset} disabled={props.state.resetDisabled} />
        </div>
      </div>

      <div className='App'>
        <div >
          <SettingsDisplay maxValue={props.state.maxValue}
            startValue={props.state.startValue}
            count={props.state.count}
            changeMaxValue={changeMaxValue}
            changeStartValue={changeStartValue} />
        </div>
        <div className='buttons'>
          <MyButton name='set' onClick={onSetValue} disabled={props.state.setDisabled} />
        </div>
      </div>
    </div>
  )
}

export default App;
