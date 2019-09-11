import * as React from "react";
import "./myDetails.css"


export default class MyListDetails extends React.Component {

    data = localStorage.getItem('data')?JSON.parse(localStorage.getItem('data')): null;
    constructor(props){
        super(props);
        this.state = {
            challenge_data: []
        };

    }
    backTodashboard() {
        localStorage.setItem('data', "");
        this.props.history.push('/home');
    }



    render() {
        return (
            <div className="myContainer">
                <p onClick={() => {this.backTodashboard()}}>Back</p>
                <h1>I am working</h1>
            </div>
        );
    }
}