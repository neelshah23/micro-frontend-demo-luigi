import React, {useState} from 'react';
import './App.css';
import { Route, HashRouter } from "react-router-dom";
import MyList from "./components/myList/myList";
import MyListDetails from "./components/myListDetails/myListDetails";

function App() {
    const [count, setCount] = useState(0);
    const buttonClick = (message) =>{
        setCount(count+1);
        alert(message);
    };
    return (
        <div className="App">
            <HashRouter>
                <div>
                    <app-button title="My React Button" isDisabled="false" onClick={() => buttonClick('Hi React')}></app-button>
                    <p>Click count: {count}</p>
                </div>
                <div>
                    <Route exact path="/" component={MyList}/>
                    <Route path="/details" component={MyListDetails} />
                    <Route path="/home" component={MyList} />
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
