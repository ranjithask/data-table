import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ start = 0, limit = 5, onPageChange, pageSize, onLimitChange }) => {
    const click = (button, e) => {
        switch (button) {
            case "PREV":
                onPageChange(start - limit);
                break;
            case "NEXT":
                onPageChange(start + limit);
                break;
            case "LIMIT":
                onLimitChange(e.target.value * 1);

        }
    }
    return (
        <>
            <button className="page-button" disabled={start === 0} onClick={() => click('PREV')}>Prev Page</button>
            <button className="page-button" onClick={() => click('NEXT')}>Next Page</button>
            <select className="page-select" onChange={e => click('LIMIT', e)}>
                {pageSize.map(page => <option key={page} value={page}>{page}</option>)}
            </select>
        </>
    );
};


Pagination.propTypes = {
    start: PropTypes.number,
    limit: PropTypes.number,
    onPageChange: PropTypes.func,
    onLimitChange: PropTypes.func,
    pageSize: PropTypes.array
};


export default Pagination;