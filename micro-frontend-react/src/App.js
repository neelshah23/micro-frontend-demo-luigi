import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, HashRouter, NavLink } from "react-router-dom";
import MyList from "./components/myList/myList";
import MyListDetails from "./components/myListDetails/myListDetails";

function App() {
    return (
        <div className="App">
            <HashRouter>
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
