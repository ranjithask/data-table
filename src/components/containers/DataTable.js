import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'lodash/isEmpty';
import * as actions from '../../actions/DataActions';
import Table from '../common/Table/Table';
import { TableTitle } from '../../configurations/DataTableConf';
import { dataTableRenderer } from '../../utils/DataTableUtil';
import Pagination from '../common/Pagination/Pagination';

const DataTable = ({ photos, actions }) => {

    const [paginationData, setPaginationData] = useState({
        start: 0,
        limit: 5
    });

    const fetchData = (_start, _limit) => {
        actions.getData(_start, _limit);
    }
    const tableStructure = {
        title: TableTitle,
        renderer: dataTableRenderer
    }
    useEffect(() => {
        fetchData(paginationData.start, paginationData.limit);
    }, [paginationData]);

    const paginationChange = start => {
        setPaginationData({ ...paginationData, ...{ start } });
    }

    const limitChange = limit => {
        setPaginationData({ ...paginationData, ...{ limit } });
    }

    return (
        <>
            <Table
                meta={tableStructure}
                data={photos}
            />
            {!isEmpty(photos) && <Pagination {...paginationData} onPageChange={paginationChange} pageSize={[5, 10]} onLimitChange={limitChange} />}
        </>
    );
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

const mapStateToProps = state => ({
    photos: state.data.photos
});

DataTable.propTypes = {
    actions: PropTypes.object.isRequired,
    photos: PropTypes.array
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DataTable);