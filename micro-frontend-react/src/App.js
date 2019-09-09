import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, HashRouter, NavLink } from "react-router-dom";

function App() {
    return (
        <div className="App">

            <HashRouter>
                <NavLink to="/home" key="home">Home</NavLink>
                <NavLink to="/home2" key="home2">Home2</NavLink>

                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Route exact path="/" component={() => <h1>Welcome To react App</h1>}/>
                    <Route path="/home" component={() => <h1>HOME 1</h1>} />
                    <Route path="/home2" component={() => <h1>HOME 2</h1>} />
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
