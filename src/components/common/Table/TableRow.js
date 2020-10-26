import React from 'react';
import PropTypes from 'prop-types';
import TableCell from './TableCell';

const TableRow = ({ data, title, renderer }) => {
    const processData = (key, rowData) => {
        if (renderer)
            return renderer(key, rowData);
        return rowData[key];
    }
    return (
        <>
            {data.map((row) => <tr key={row.id}>
                {
                    title.map(({ key }) => <TableCell key={key} data={processData(key, row)} />)
                }
            </tr>)}
        </>
    );
};


TableRow.propTypes = {
    data: PropTypes.array,
    title: PropTypes.array,
    renderer: PropTypes.func
};


export default TableRow;