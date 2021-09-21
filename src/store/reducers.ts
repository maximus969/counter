import {
  ActionType,
  CHANGE_DISPLAY_VALUE,
  CHANGE_MAX_VALUE_WITHOUT_ERROR,
  CHANGE_MAX_VALUE_WITH_ERROR,
  CHANGE_START_VALUE_WITHOUT_ERROR,
  CHANGE_START_VALUE_WITH_ERROR,
  DISABLE_INCREMENT_BUTTON,
  RESET_DISPLAY_VALUE,
} from "./actions";
import { SET_VALUES } from "./actions";

export type InitialStateType = typeof initialState

const initialState = {
  count: 0,
  maxValue: 2,
  startValue: 0,
  incDisabled: false,
  resetDisabled: false,
  setDisabled: true,
  numbersOnChange: false,
  inCorrectValue: false,
};

export function counterReducer(state: InitialStateType = initialState, action: ActionType): InitialStateType {
  switch (action.type) {
    case CHANGE_DISPLAY_VALUE:
      return {
        ...state,
        count: state.count + 1,
      };
    case DISABLE_INCREMENT_BUTTON:
      return {
        ...state,
        count: state.count + 1,
        incDisabled: true,
      };
    case RESET_DISPLAY_VALUE:
      return {
        ...state,
        count: state.startValue,
        incDisabled: false
      };
    case CHANGE_MAX_VALUE_WITHOUT_ERROR:
      return {
        ...state,
        maxValue: action.maxValue,
        setDisabled: false,
        resetDisabled: true,
        incDisabled: true,
        numbersOnChange: true,
      };
    case CHANGE_MAX_VALUE_WITH_ERROR:
      return {
        ...state,
        maxValue: action.maxValue,
        setDisabled: true,
        incDisabled: true,
        resetDisabled: true,
      };
    case CHANGE_START_VALUE_WITHOUT_ERROR:
      return {
        ...state,
        startValue: action.startValue,
        setDisabled: false,
        resetDisabled: true,
        incDisabled: true,
        numbersOnChange: true,
      };
    case CHANGE_START_VALUE_WITH_ERROR:
      return {
        ...state,
        startValue: action.startValue,
        setDisabled: true,
        incDisabled: true,
        resetDisabled: true,
      };
    case SET_VALUES:
      return {
        ...state,
        count: state.startValue,
        setDisabled: true,
        resetDisabled: false,
        incDisabled: false,
        numbersOnChange: false,
      };
      default:
        return state;
  }
}
