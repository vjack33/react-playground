import './App.css';
import {ReduxStoreApp} from "./components/ReduxStoreApp";
import {store} from "./store/store";
import {Provider} from "react-redux";
import UseMemoApp from "./components/UseMemoApp";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ArrayComponent from "./components/ArrayComponent";
import CallApplyBind from "./components/CallApplyBind";
import PromiseApp from "./components/PromiseApp";
import UseReducerApp from "./components/UseReducerApp";
import MonacoEditorApp from "./components/MonacoEditorApp";


function App() {

    return (
        <Provider store={store}>
            <div style={{
                display: "flex",
                flexDirection: 'column'
            }}>
                {/*<FirstComponent/>*/}
                {/*<SecondComponent/>*/}
                {/*<ArrayComponent/>*/}
                {/*<CallApplyBind/>*/}
                {/*<UseMemoApp/>*/}
                {/*<ReduxStoreApp/>*/}
                {/*<PromiseApp/>*/}
                {/*<UseReducerApp/>*/}
                <MonacoEditorApp/>
            </div>
        </Provider>
    );
}

export default App;
