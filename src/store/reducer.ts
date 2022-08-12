import { combineReducers } from '@reduxjs/toolkit'
import recommendReducer from '../views/recommend/store/slice'

const reducers = {
  recommend: recommendReducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer
