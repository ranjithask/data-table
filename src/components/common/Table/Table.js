import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import TableRow from './TableRow';
import TableCell from './TableCell';
import '../../../styles/table.scss';

//A generic table component
const Table = ({ data, meta }) => {
    const { title, renderer } = meta;

    return (
        <div className='data-container'>
            {!isEmpty(data) && <table>
                <thead>
                    <tr>
                        {
                            title.map(row => <TableCell key={row.id} data={row.name} isHead />)
                        }
                    </tr>
                </thead>
                <tbody>
                    <TableRow data={data} title={title} renderer={renderer} />
                </tbody>
            </table>}
        </div>
    );
};

Table.propTypes = {
    data: PropTypes.array,
    meta: PropTypes.object,
    renderer: PropTypes.func
};

export default Table;