import React from 'react';

const WorkList = () => {
    return (
        <div className="noPadding right_wrap">
            {/* ------------- content ----------------- */}
            <div className="main_navbar headding">
                <h1>
                    <i className="fa fa-bars" aria-hidden="true" id="toggle_nav" /> Việc nhà
                </h1>
            </div>
            <div className="container main_content">
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12  wrap_form">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="examplePassword">Từ ngày</label>
                            <input type="date" className="input" name="date" placeholder="date placeholder" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="exampleDatetime">Đến ngày</label>
                            <input type="date" className="input" name="date" placeholder="date placeholder" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="exampleSelect">Trạng thái</label>
                            <select className="form-select input select-ip" aria-label="Default select example">
                                <option value={1}>Ẩn</option>
                                <option value={2}>Đăng</option>
                            </select>
                        </div>
                        <button type="button" className="btn btn-primary btn-block  btn_common">Tìm kiếm</button>
                        <button type="button" className="btn btn-primary btn-block btn_common">Làm mới</button>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-12">
                        <form className="form1 form2">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="exampleSelect">Giới hạn</label>
                                <select className="form-select input2" aria-label="Default select example">
                                    <option value={1}>25</option>
                                    <option value={2}>50</option>
                                </select>
                            </div>
                            <div className="mb-3 mr_left no_mr">
                                <label className="form-label" htmlFor="exampleSelect">Sắp xếp</label>
                                <select className="form-select input2" aria-label="Default select example">
                                    <option selected>Tự động</option>
                                    <option value={1}>A -&gt; Z</option>
                                    <option value={2}>Z -&gt; A</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="col-12">
                        <div className="card" style={{ fontSize: '100%' }}>
                            <div className="card-header">
                                <h1 className="card-title">
                                    <p className="p_text">Danh sách các loại việc nhà</p>
                                </h1>
                                <div className="card-tools">
                                    <div className="input-group input-group-sm">
                                        <div className="input-group w_ip">
                                            <input type="text" className="form-control ip" placeholder="Search ..." aria-label="Input group example" aria-describedby="basic-addon1" />
                                            <span className="input-group-text" id="basic-addon1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /.card-header */}
                            <div className="card-body table-responsive p-0" style={{ height: '300px' }}>
                                <table className="table table-striped table-head-fixed text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th className="th">Tiêu đề</th>
                                            <th className="th">Biểu tượng</th>
                                            <th className="th">Số lượng</th>
                                            <th className="th">Thời gian tạo</th>
                                            <th className="th">Trạng thái</th>
                                            <th className="th_239">Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>183</td>
                                            <td>Đám cưới trong mơ</td>
                                            <td><img className="image2" src="./assets/images/logo512.png" alt="logo" /></td>
                                            <td><span className="tag tag-success">Approved</span></td>
                                            <td>22-12-2021 14:00:00</td>
                                            <td>Ẩn</td>
                                            <td className="mw-50">
                                                <button type="button" className="btn btn-block btn-danger btn-sm"><i className="fa fa-trash" aria-hidden="true" /></button>
                                                |
                                                <button type="button" className="btn btn-block btn-success btn-sm"><i className="fa fa-pencil-square-o" aria-hidden="true" /></button>
                                            </td></tr>
                                        <tr>
                                            <td>183</td>
                                            <td>Đám cưới trong mơ</td>
                                            <td><img className="image2" src="./assets/images/logo512.png" alt="logo" /></td>
                                            <td><span className="tag tag-success">Approved</span></td>
                                            <td>22-12-2021 14:00:00</td>
                                            <td>Ẩn</td>
                                            <td className="mw-50">
                                                <button type="button" className="btn btn-block btn-danger btn-sm"><i className="fa fa-trash" aria-hidden="true" /></button>
                                                |
                                                <button type="button" className="btn btn-block btn-success btn-sm"><i className="fa fa-pencil-square-o" aria-hidden="true" /></button>
                                            </td></tr>
                                        <tr>
                                            <td>183</td>
                                            <td>Đám cưới trong mơ</td>
                                            <td><img className="image2" src="./assets/images/logo512.png" alt="logo" /></td>
                                            <td><span className="tag tag-success">Approved</span></td>
                                            <td>22-12-2021 14:00:00</td>
                                            <td>Ẩn</td>
                                            <td className="mw-50">
                                                <button type="button" className="btn btn-block btn-danger btn-sm"><i className="fa fa-trash" aria-hidden="true" /></button>
                                                |
                                                <button type="button" className="btn btn-block btn-success btn-sm"><i className="fa fa-pencil-square-o" aria-hidden="true" /></button>
                                            </td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* {/* ------ pagination ------ * /} */}
                    <div className="pagination">
                        <nav aria-label="..." className="pagination_nav">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link">Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item active" aria-current="page">
                                    <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* ------------- end content ----------------- */}
                    <div className="footer">
                        CoppyRight @ by ABC
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkList;
