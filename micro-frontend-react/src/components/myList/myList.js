import * as React from "react";
import Box from "@material-ui/core/Box/Box";
import EnhancedTable from "../table/table";
import axios from "axios";
import gql from "graphql-tag";


export default class MyList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            challenge_data: []
        };

        this.getAllData();
    }



    getAllData(){

        axios({
            url: 'https://01sdp6wt1l.execute-api.us-east-1.amazonaws.com/qa/',
            method: 'post',
            data: {
                query: gql`
query getChallengeListByStatus($status_id: String!) {
  challengeListByStatus(
    filter: {
        status: $status_id
    }
  ) {
    key
    list {
     
      title
      location
     c_status
     createdAt
     createdByName
   }
 }}
`,
                variables: {
                    status_id: 'in_draft'
                }
            }
        }).then((result) => {
            if(result.data.data && result.data.data.challengeListByStatus.list) {
                this.updateData(result.data.data.challengeListByStatus.list);
            }
        });
    }

    storeDetails(data){
        localStorage.setItem('data',data);
    }
    goToDetails(data){
        this.props.history.push('/details')
    }
    updateData(data) {
        const new_data = {
            columns: [],
            data: data
        };

        if(data.length) {
            const columns = Object.keys(data[0]);

            for (let column of columns) {
                new_data.columns.push({title: column.replace(/_/g,' ').toUpperCase(), field: column});
            }
        }
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