import './App.css';
import {ReduxStoreApp} from "./components/ReduxStoreApp";
import {store} from "./store/store";
import {Provider} from "react-redux";


function App() {

    return (
        <Provider store={store}>
            <div style={{
                display: "flex",
                flexDirection: 'column'
            }}>
                {/*<FirstComponent*/}
                {/*    currentCount={currentCount}*/}
                {/*    setCurrentCount={setCurrentCount}*/}
                {/*    printDataFn={(currentCount) => printCont(currentCount)}*/}
                {/*/>*/}
                {/*<SecondComponent/>*/}
                {/*<ArrayComponent/>*/}
                {/*<CallApplyBind/>*/}
                {/*<UseMemoApp/>*/}
                <ReduxStoreApp/>
            </div>
        </Provider>
    );
}

export default App;
