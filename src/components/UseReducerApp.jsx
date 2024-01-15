import {useReducer} from "react";


function UseReducerApp() {

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return {count: state.count + 1}
            case 'decrement':
                return {count: state.count - 1}
            default:
                return state
        }
    }


    const [state, dispatch] = useReducer(reducer, {count: 0})

    return (
        <>
            Use Reducer
            <button onClick={() => dispatch({type: 'increment'})}>Add red</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Reduce red</button>
            {state.count}
        </>
    )
}

export default UseReducerApp