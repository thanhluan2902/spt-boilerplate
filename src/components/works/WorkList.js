import React, { useState, useEffect } from 'react';
import WorkItem from './WorkItem';
import Filter from '../filter/Filter';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Pagination from './../pagination/Pagination';
import './WorkList.css';
import { connect } from 'react-redux';
import * as action from './../../actions/index';

const WorkList = ({ works , onRequestWorkApi }) => {

    const [status, setStatus] = useState(false);
    useEffect(() => {
        async function fetchWork() {
            onRequestWorkApi();
        }
        fetchWork();
    }, []);


    return (
        <div className={status ? "right_wrap no_mr" : "right_wrap"}>
            <Header onToggleMargin={() => { setStatus(!status) }} />
            <div className="container main_content">
                <div className="row">
                    <Filter />
                    <div className="col-12">
                        <div className="card" style={{ marginBottom: '50px' }}>
                            <div className="card-body">
                                <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6" />
                                        <div className="col-sm-12 col-md-6" />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table id="example2" className="table table-bordered table-hover dataTable dtr-inline" role="grid" aria-describedby="example2_info">
                                                <thead>
                                                    <tr role="row">
                                                        <th className="sorting sorting_asc th_sort" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">
                                                            Tiêu đề
                                                            <i className="fa fa-filter" aria-hidden="true" />
                                                        </th>
                                                        <th className="sorting th_sort" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Browser: activate to sort column ascending">
                                                            Biểu tượng
                                                        </th>
                                                        <th className="sorting th_sort th1" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Platform(s): activate to sort column ascending">
                                                            Ngày tạo
                                                            <i className="fa fa-filter" aria-hidden="true" />
                                                        </th>
                                                        <th className="sorting th_sort th1" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Platform(s): activate to sort column ascending">
                                                            Số lượng
                                                            <i className="fa fa-filter" aria-hidden="true" />
                                                        </th>
                                                        <th className="sorting th_sort th" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Engine version: activate to sort column ascending">
                                                            Trạng thái
                                                        </th>
                                                        <th className="sorting th_sort" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="CSS grade: activate to sort column ascending">
                                                            Thao tác
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        works ? works.map((work) => {
                                                            return <WorkItem work={work} key={work.homework_item_id} />
                                                        }) : []
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <Pagination />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        works: state.works,
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onRequestWorkApi: () => {
            dispatch(action.actRequesthWorkApi());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkList);