import React from 'react';
import MaterialTable from 'material-table';


export default function EnhancedTable(props) {

    return (
        <MaterialTable
            title="My Reports"
            columns={props.data.columns}
            data={props.data.data}
            actions={[
                {
                    icon: 'remove_red_eye',
                    tooltip: 'View details',
                    onClick: (event, rowData) => {
                        localStorage.setItem('data',JSON.stringify(rowData));
                        props.history.push('/');
                    }
                }
            ]}
            options={{
                actionsColumnIndex: -1
            }}
        />
    );
}
