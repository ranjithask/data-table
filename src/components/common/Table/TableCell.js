import React from 'react';
import PropTypes from 'prop-types';

const TableCell = ({ data, isHead }) => (<>
    {isHead ? <th>{data}</th>: <td>{data}</td>}
</>)

TableCell.propTypes = {
    data: PropTypes.any,
    isHead: PropTypes.bool
};

export default TableCell;