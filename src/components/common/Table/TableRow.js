import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import TableCell from './TableCell';

const TableRow = ({ data, title, renderer, deleteRow }) => {
    const processData = (key, rowData) => {
        if (renderer)
            return renderer(key, rowData);
        return rowData[key];
    }
    return (
        <>
            {data.map((row) => <tr key={row.id} >
                {
                    title.map(({ key }) => <TableCell key={key} data={processData(key, row)} />)
                }
                {
                    deleteRow && <TableCell data={<button className="delete-button" onClick={() => deleteRow(row)}><FontAwesomeIcon icon={faTrash} /></button>} />
                }
            </tr>)}
        </>
    );
};


TableRow.propTypes = {
    data: PropTypes.array,
    title: PropTypes.array,
    renderer: PropTypes.func,
    deleteRow: PropTypes.func
};


export default TableRow;