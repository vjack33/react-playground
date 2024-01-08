import {useEffect, useState} from "react";

export default function ArrayComponent() {
    const [arr, setArr] = useState([])

    useEffect(() => {
        let inputArr = [...Array(20).keys()]


        let resArr;

        // resArr = inputArr.filter((item) => {
        //     return item % 2 === 1
        // })
        //
        // resArr = inputArr.map((item) => {
        //     return item * item
        // })

        resArr = inputArr.reduce((acc, item) => {
            return acc + item
        }, 0)

        setArr(resArr)


    }, []);


    return (
        <>
            Array Component {arr.toString()}
        </>
    )
}