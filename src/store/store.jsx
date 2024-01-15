import { configureStore } from '@reduxjs/toolkit'
import {CounterReducer, UserDataReducer} from './CounterSlice'

export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        userData: UserDataReducer,
    },
})