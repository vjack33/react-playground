import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";

function App() {


    const [currentCount, setCurrentCount] = useState(0)

    useEffect(() => {
        printCont(currentCount)
    }, [currentCount])

    function printCont(count) {
        console.log(`Count is: ${count}`)
    }


    return (
        <div style={{
            display: "flex",
            flexDirection: 'column'
        }}>
            <FirstComponent
                currentCount={currentCount}
                setCurrentCount={setCurrentCount}
                printDataFn={(currentCount) => printCont(currentCount)}
            />
            <SecondComponent/>
        </div>
    );
}

export default App;
