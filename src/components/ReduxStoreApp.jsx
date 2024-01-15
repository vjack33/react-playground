import React from 'react'
import {useSelector, useDispatch, Provider} from 'react-redux'
import {decrement, increment, updateName} from '../store/CounterSlice'


export function ReduxStoreApp() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)
    const name = useSelector((state) => state.userData.username)

    console.log("name", name, window.sessionStorage.getItem("operation"));
    window.localStorage.removeItem("operation")
    console.log();

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => {
                        window.localStorage.setItem("operation", "Increment");
                        window.sessionStorage.setItem("operation", "Increment");
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
                        window.sessionStorage.setItem("operation", "Decrement");
                        dispatch(decrement())
                    }}
                >
                    Decrement
                </button>
                <button onClick={() => dispatch(updateName(Math.floor(Math.random() * 11)))}>
                    Change Name
                </button>
            </div>
        </div>
    )
}