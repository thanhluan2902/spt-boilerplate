import React from 'react';

const Filter = () => {
    return (
        <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12  wrap_form">
            <div className="mb-2 order_2">
                <input type="text" className="input" name="date" placeholder="Search ..." />
            </div>
            <div className="mb-2">
                <input type="text" className="input" name="date" placeholder="Từ ngày: " onfocus="(this.type='date')" />
            </div>
            <div className="mb-2">
                <input type="text" className="input" name="date" placeholder="Đến ngày: " onfocus="(this.type='date')" />
            </div>
            <div className="mb-2">
                <select className="form-select input_select" aria-label="Default select example">
                    <option value={2}>Tất cả</option>
                    <option value={2}>Đăng</option>
                    <option value={1}>Ẩn</option>
                </select>
            </div>
            <button type="button" className="btn btn-primary btn-block  btn_common order_3"><i className="fa fa-search" aria-hidden="true" /></button>
            <button type="button" className="btn btn-primary btn-block btn_common order_4"><i className="fa fa-refresh" aria-hidden="true" /></button>
            <a href="workAdd.html"><button type="button" className="btn btn-primary btn-block btn_common order_4"><i className="fa fa-plus" aria-hidden="true" /></button></a>
        </div>
    );
}

export default Filter;
