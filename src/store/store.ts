import { loadState } from '../utils/localstorage.utils';
import { createStore } from 'redux';
import { combineReducers } from 'redux'
import { counterReducer } from './reducers';


export const rootReducers = combineReducers({
  counter: counterReducer,
})

export const store = createStore(rootReducers, loadState())

export type AppStateType = ReturnType<typeof rootReducers>


