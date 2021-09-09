import React from 'react';

const EditWork = () => {
    return (
        <div className="noPadding right_wrap">
            {/* ------------- content ----------------- */}
            <div className="main_navbar headding">
                <h1>
                    <i className="fa fa-bars" aria-hidden="true" id="toggle_nav" /> Sửa việc nhà
                </h1>
            </div>
            {/* ------------------------------------------------------------ */}
            <div className="container main_content">
                <div className="row">
                    <div className="col-12">
                        <form className="mr_bot50">
                            <div className="mb-4">
                                <label className="form-label" htmlFor="exampleEmail">* Tiêu đề</label>
                                <input type="text" className="form-control" name="email" id="exampleEmail" defaultValue="Tiêu đề" />
                            </div>
                            <div className="mb-4">
                                <label className="form-label" htmlFor="examplePassword">Biểu tượng</label>
                                <br /><img className="image" src="./assets/images/logo512.png" alt="" />
                                <br /><br />
                                <label className="form-label">Chọn ảnh</label>
                                <input className="form-control" type="file" name="file" />
                            </div>
                            <div className="mb-4 form3 uploadButton">
                                <label className="form-label" htmlFor="examplePassword">* Số lượng</label>
                                <input className="form-control" type="text" defaultValue={100} name="password" id="examplePassword" />
                            </div>
                            <br />
                            <div className="mb-4">
                                <label className="form-label" htmlFor="exampleSelect">* Trạng thái</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option value={2}>Ẩn</option>
                                    <option value={3}>Hiện</option>
                                </select>
                            </div>
                            <button type="button" className="btn btn-primary btn-block">Lưu thay đổi</button>
                            <button type="button" className="btn btn-secondary btn-block">Hủy bỏ</button>
                        </form>
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

export default EditWork;
