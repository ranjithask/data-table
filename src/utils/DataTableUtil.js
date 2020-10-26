import React from 'react';

export const dataTableRenderer = (key, rowData) => {
    switch (key) {
        case 'thumbnailUrl':
            return <img src={rowData.thumbnailUrl} className='thumbnail' />;
        case 'title':
            return <a href={rowData.url} target="_blank" rel="noopener noreferrer">{rowData.title}</a>
        default:
            return rowData[key]
    }
}