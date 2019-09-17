import * as React from "react";
import Box from "@material-ui/core/Box/Box";
import EnhancedTable from "../table/table";
import axios from "axios";
import gql from "graphql-tag";


export default class MyList extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            challenge_data: [{
                id: '1',
                name: 'Sheron Risser',
                companyName: 'xerox',
                totalProjectCompleted: '15',
                joiningDate: '21 Jan 2016'
            },{
                id: '2',
                name: 'Terrie Oleson',
                companyName: 'IBM',
                totalProjectCompleted: '19',
                joiningDate: '14 Mar 2013'
            },{
                id: '3',
                name: 'Jackson Rothschild',
                companyName: 'Apple',
                totalProjectCompleted: '5',
                joiningDate: '21 Jan 2018'
            },{
                id: '4',
                name: 'Tabetha Basye',
                companyName: 'Google',
                totalProjectCompleted: '4',
                joiningDate: '01 Dec 2016'
            },{
                id: '5',
                name: 'Orval Laviolette',
                companyName: 'Google',
                totalProjectCompleted: '16',
                joiningDate: '21 Jan 2014'
            }]
        };
    }
    componentDidMount() {
        this.updateData();
    }

    storeDetails(data){
        localStorage.setItem('data',data);
    }
    goToDetails(data){
        this.props.history.push('/details')
    }
    updateData() {
        const new_data = {
            columns: [
                {title:'ID', field: 'id'},
                {title:'Name', field: 'name'},
                {title:'Company name', field: 'companyName'},
                {title:'Total project undertaken', field: 'totalProjectCompleted'},
                {title:'Joining Date', field: 'joiningDate'},
                ],
            data: this.state.challenge_data
        };

        this.setState({challenge_data: new_data});
    };
    render() {
        return (
            <div style={{padding: "10px"}} className={'contentPadding'}>
                <Box display="flex" flexDirection="column">
                    <Box display="flex" flexDirection="row" style={{alignItems: "baseline", placeContent: "space-between"}}>
                    </Box>
                    <EnhancedTable title="Dashboard" data={this.state.challenge_data} gotoDetails={()=> this.goToDetails()}/>
                </Box>
            </div>
        );
    }
}