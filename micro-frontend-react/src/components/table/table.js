import React from 'react';
import MaterialTable from 'material-table';

export default function EnhancedTable(props) {
    return (
        <MaterialTable
            title="My Reports"
            columns={props.data.columns}
            data={props.data.data}
        />
    );
}
