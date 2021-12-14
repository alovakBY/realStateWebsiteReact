import { useState } from "react";
// import { Route } from "react-router-dom";
import store from "./redux/store";
import "./App.css";

function App() {
    const [name, setName] = useState(store.getState().name);
    const [inputData, setInputData] = useState("");

    function changeInputData(e) {
        setInputData(e.target.value);
    }

    function getName() {
        store.dispatch({
            type: "CHANGE_NAME",
            value: inputData,
        });
        setName(store.getState().name);
    }

    return (
        <div className="App">
            <input
                type="text"
                value={inputData}
                onChange={changeInputData}
            ></input>
            <br />
            <button onClick={getName}>Сменить имя</button>
            <br />
            {name}
        </div>
    );
}

export default App;
