import * as React from "react";
import "./myDetails.css"
import Icon from "@material-ui/core/Icon/Icon";


export default class MyListDetails extends React.Component {

    data = localStorage.getItem('data')?JSON.parse(localStorage.getItem('data')): this.backTodashboard();
    constructor(props){
        super(props);
        this.state = {
            challenge_data: []
        };
        console.log(this.data);

    }
    backTodashboard() {
        localStorage.setItem('data', "");
        this.props.history.push('/home');
    }

    render() {
        return (
            <div className="myContainer">
                <p style={{textAlign: "left", cursor: "pointer"}} onClick={() => {this.backTodashboard()}}><Icon style={{verticalAlign: "middle"}}>arrow_back</Icon> <span>Back to dashboard</span></p>
                <div>
                    <h1>{this.data.name}</h1>
                    <p>Company Name: {this.data.companyName}</p>
                    <p>Total Project Completed: {this.data.totalProjectCompleted}</p>
                    <p>Joining Date: {this.data.joiningDate}</p>
                </div>
            </div>
        );
    }
}