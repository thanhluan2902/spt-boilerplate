import React , { useState } from 'react';
import WorkItem from './WorkItem';
import Filter from '../filter/Filter';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './WorkList.css';

const WorkList = () => {
    const [status , setStatus] = useState(false);
    
    return (
        <div className={ status ? "right_wrap no_mr" : "right_wrap" }>
            <Header onToggleMargin={ () => { setStatus(!status)} }/>
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
                                                        <th className="sorting th_sort th" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Engine version: activate to sort column ascending">
                                                            Trạng thái
                                                        </th>
                                                        <th className="sorting th_sort" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="CSS grade: activate to sort column ascending">
                                                            Thao tác
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="odd">
                                                        <td className="dtr-control sorting_1" tabIndex={0}>Gecko</td>
                                                        <td> <img src="./assets/images/logo512.png" alt="logo" className="images" /> </td>
                                                        <td className="th1">28-02-2000 19:00:15</td>
                                                        <td className="th">Đăng</td>
                                                        <td>
                                                            <button type="button" className="btn btn-block btn-danger btn-sm"><i className="fa fa-trash" aria-hidden="true" /></button>
                                                            &nbsp;|&nbsp;
                                                            <button type="button" className="btn btn-block btn-success btn-sm"><i className="fa fa-pencil" aria-hidden="true" /></button>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12">
                                            <div className="dataTables_paginate paging_simple_numbers" id="example2_paginate">
                                                <ul className="pagination">
                                                    <li className="paginate_button page-item previous disabled" id="example2_previous"><a href="#" aria-controls="example2" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a>
                                                    </li>
                                                    <li className="paginate_button page-item active"><a href="#" aria-controls="example2" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                                                    <li className="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                                                    <li className="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li>
                                                    <li className="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li>
                                                    <li className="paginate_button page-item th"><a href="#" aria-controls="example2" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li>
                                                    <li className="paginate_button page-item th"><a href="#" aria-controls="example2" data-dt-idx={6} tabIndex={0} className="page-link">6</a></li>
                                                    <li className="paginate_button page-item next" id="example2_next"><a href="#" aria-controls="example2" data-dt-idx={7} tabIndex={0} className="page-link">Next</a></li>
                                                </ul>
                                            </div>
                                        </div>
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

export default WorkList;
