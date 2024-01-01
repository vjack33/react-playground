function FirstComponent(props) {
    let {currentCount, setCurrentCount, printDataFn} = props
    return (
        <>
            <button
                onClick={() =>
                    setCurrentCount(value => value + 1)}>
                Add
            </button>
            <a
                style={{padding: '20px'}}>
                Count: {currentCount}
            </a>
            <button
                onClick={() =>
                    setCurrentCount(value => value - 1)}>
                Reduce
            </button>

            <button onClick={() => printDataFn(currentCount)}>Print</button>
        </>
    )
}

export default FirstComponent;