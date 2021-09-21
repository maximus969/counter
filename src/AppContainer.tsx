import { connect } from 'react-redux';
import './App.css';
import App from './App';
import { changeMaxValueWithError, changeMaxValueWithoutError, changeStartValueWithError, changeStartValueWithoutError, disableIncrementButton, increaseValue, resetDisplayValue, setValues } from './store/actions';
import { AppStateType } from './store/store';

export type MapStatePropsType = ReturnType<typeof mapStateToProps>

const mapStateToProps = (state: AppStateType) => {
  return {
    state: state.counter
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    increaseValue: () => {
      dispatch(increaseValue())
    },
    disableIncrementButton: () => {
      dispatch(disableIncrementButton())
    },
    resetDisplayValue: () => {
      dispatch(resetDisplayValue())
    },
    changeMaxValueWithoutError: (maxValue: number) => {
      dispatch(changeMaxValueWithoutError(maxValue))
    },
    changeMaxValueWithError: (maxValue: number) => {
      dispatch(changeMaxValueWithError(maxValue))
    },
    changeStartValueWithoutError: (startValue: number) => {
      dispatch(changeStartValueWithoutError(startValue))
    },
    changeStartValueWithError: (startValue: number) => {
      dispatch(changeStartValueWithError(startValue))
    },
    setValues: () => {
      dispatch(setValues())
    },
  }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
