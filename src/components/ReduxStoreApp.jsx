import React from 'react'
import {useSelector, useDispatch, Provider} from 'react-redux'
import {decrement, increment, updateName} from '../store/CounterSlice'


export function ReduxStoreApp() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)
    const name = useSelector((state) => state.userData.username)

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => {
                        dispatch(increment())
                    }}
                >
                    Increment
                </button>
                <span>{count}</span>
                <span>{name}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => {
                        dispatch(decrement())
                    }}
                >
                    Decrement
                </button>
                <button
                    onClick={() =>
                        dispatch(updateName(Math.floor(Math.random() * 11)))
                    }>
                    Change Name
                </button>
            </div>
        </div>
    )
}