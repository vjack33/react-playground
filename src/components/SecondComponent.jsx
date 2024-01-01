import {useEffect} from "react";

export default function SecondComponent() {

    function printerFunction(colour, event) {
        //console.log(colour)
        event.stopPropagation()
    }

    useEffect(() => {
        let useCaptureFlag = false
        document.getElementById('red-div').addEventListener(
            "click",
            function () {
                console.log("Captured: ", "RED");
            },
            useCaptureFlag
        )

        document.getElementById('green-div').addEventListener(
            "click",
            function () {
                console.log("Captured: ", "green");
            },
            useCaptureFlag
        )

        document.getElementById('blue-div').addEventListener(
            "click",
            function () {
                console.log("Captured: ", "BLUE");
            },
            useCaptureFlag
        )
    },[])


    return (
        <div
            id={'red-div'}
            style={{background: 'red'}} className={'center'}
            onClick={(event) => printerFunction('RED', event)}>
            Red
            <div
                id={'green-div'}
                style={{background: 'green'}} className={'center'}
                onClick={(event) => printerFunction('GREEN', event)}>
                Green
                <div
                    id={'blue-div'}
                    style={{background: 'blue'}} className={'center'}
                    onClick={(event) => printerFunction('BLUE', event)}>
                    Blue
                </div>
            </div>
        </div>
    )
}