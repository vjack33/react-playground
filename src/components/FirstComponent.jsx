import {useEffect, useState} from "react";

function FirstComponent(props) {
    let {currentCount, setCurrentCount, printDataFn} = props

    let [apiData, setApiData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setApiData(data)
            })

        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(res => res.json())
            .then(data => console.log("DATA", data))

    }, [])


    const [inputValue, setInputValue] = useState(1)

    let list = ['apple', 'banana', 'citrus', 'drums', 'apple', "banana", "drums", 'apple']

    list = [...new Set(list)]

    let l1 = [1, 2, 3]
    let l2 = [4, 5, 6]
    let l3 = [...l1, ...l2]

    console.log(l1.concat(l2,l3))

    console.log(l3)

    console.log(list)

    function productList(dataList) {
        return (<div style={{padding: '20px'}}>
            {dataList.map((data, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            margin: '10px',
                            padding: '10px',
                            background: '#f7f7f7',
                            border: '1px solid #0057ff',
                            borderRadius: '10px'
                        }}>
                        <a>{data?.title}</a>
                    </div>
                )
            })}
        </div>)
    }

    return (<>
        <button
            onClick={() => setCurrentCount(value => value + 1)}>
            Add
        </button>
        <a
            style={{padding: '20px'}}>
            Count: {currentCount}
        </a>
        <button
            onClick={() => setCurrentCount(value => value - 1)}>
            Reduce
        </button>
        {/*{productList(apiData)}*/}

        <button onClick={() => printDataFn(currentCount)}>Print {inputValue}</button>
        <input value={inputValue} onChange={(e) => setInputValue(Number(e.target.value) * 2)}></input>
    </>)
}

export default FirstComponent;