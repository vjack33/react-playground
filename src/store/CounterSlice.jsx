import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const UserDataSlice = createSlice({
    name: 'userData',
    initialState: {
        username: "No Data"
    },
    reducers: {
        updateName: (state, action) => {
            state.username = action.payload
        }
    }
})

export const {increment, decrement, incrementByAmount} = CounterSlice.actions
export const CounterReducer = CounterSlice.reducer

export const {updateName} = UserDataSlice.actions
export const UserDataReducer = UserDataSlice.reducer