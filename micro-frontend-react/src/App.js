import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, HashRouter, NavLink } from "react-router-dom";
import MyList from "./components/myList/myList";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <div>
                    <Route exact path="/" component={MyList}/>
                    <Route path="/home" component={() => <h1>HOME 1</h1>} />
                    <Route path="/home2" component={() => <h1>HOME 2</h1>} />
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
