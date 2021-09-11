import React from 'react';
import './EditWork.css';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const EditWork = () => {
    return (
        <div className="right_wrap">
             <Header />
            <div className="container main_content">
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-12">
                        <form className="mr_bot50">
                            <div className="col">
                                <input type="text" className="form-control" name="email" id="exampleEmail" defaultValue="Tiêu đề" />
                            </div>
                            <div className="col uploadButton">
                                <img className="image" src="./assets/images/logo512.png" alt="imay" />
                                <input type="file" id="upload" hidden />
                                <label htmlFor="upload" className="label_upload">Chọn ảnh</label>
                            </div>
                            <div className="col">
                                <input className="form-control" type="text" defaultValue={100} name="password" id="examplePassword" />
                            </div>
                            <br />
                            <div className="col mr_bt">
                                <select className="form-select" aria-label="Default select example">
                                    <option value={2}>Ẩn</option>
                                    <option value={3}>Hiện</option>
                                </select>
                            </div>
                            <button type="button" className="btn btn-primary btn-block">Lưu thay đổi</button>
                            <button type="button" className="btn btn-secondary btn-block">Hủy bỏ</button>
                        </form>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default EditWork;
