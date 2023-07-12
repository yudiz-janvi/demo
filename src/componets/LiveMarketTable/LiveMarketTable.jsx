import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import ArrowIcon from '../../assets/images/arrow-icon.svg';
import { Link } from 'react-router-dom';

function LiveMarketTable(props) {
    const { data } = props;
    function instrumentFormat(cell, row) {
        return (
            <div className='d-flex align-items-center'>
                <div className='icon me-3'>
                    <img src={row.instrument.url} alt={row.instrument.text} />
                </div>
                {row.instrument.text}
            </div>
        );
    }

    const columns = [
        {
            dataField: 'instrument',
            text: 'Instrument',
            formatter: instrumentFormat,
        },

        {
            dataField: 'buy',
            text: 'Buy',
            formatter: (cellContent, row) => {
                return <span className='text-green'> {cellContent}</span>;
            },
        },
        {
            dataField: 'change',
            text: 'Change%',
            formatter: (cellContent, row) => {
                return <span className='text-green'> {cellContent}</span>;
            },
        },
        {
            dataField: 'tradNow',
            formatter: (cellContent, row) => {
                return (
                    <Link
                        role='button'
                        tabindex='0'
                        to='http://plus-365.s3-website.me-south-1.amazonaws.com/mt5-trade'
                        className='btn btn-primary btn-sm'
                    >
                        Trade
                    </Link>
                );
            },
            valign: 'center',
        },
    ];

    const customTotal = () => (
        <span className='react-bootstrap-table-pagination-total'>
            5 Entries show
        </span>
    );

    const paginationOptions = {
        paginationSize: 4,
        pageStartIndex: 1,
        alwaysShowAllBtns: true, // Always show next and previous button
        withFirstAndLast: false, // Hide the going to First and Last page button
        prePageText: (
            <span>
                <img src={ArrowIcon} alt='' />
            </span>
        ),
        nextPageText: (
            <span>
                <img src={ArrowIcon} alt='' />
            </span>
        ),

        showTotal: true,
        sizePerPage: 5,
        hideSizePerPage: true,

        paginationTotalRenderer: customTotal,
    };

    return (
        <div className='live-market-table'>
            <BootstrapTable
                keyField='id'
                data={data}
                bordered={false}
                columns={columns}
                pagination={paginationFactory(paginationOptions)}
            />
        </div>
    );
}

export default LiveMarketTable;
