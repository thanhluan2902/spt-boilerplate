import React, { useEffect, useState } from 'react';
import './EditWork.css';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { connect } from 'react-redux';
import * as action from './../../actions/index';

const EditWork = ({ match , onRequestWorkEditApi , workEdit }) => {
    const [status, setStatus] = useState(false);

    var id = match.params.id;
    useEffect(() => {
        async function fetchWork() {
            onRequestWorkEditApi(id);
        }
        fetchWork();
    }, []);

    return (
        <div className={ status ? "right_wrap no_mr" : "right_wrap" }>
            <Header onToggleMargin={() => { setStatus(!status) }} />
            <div className="container main_content">
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-12">
                        <form className="mr_bot50">
                            <div className="col">
                                <input type="text" className="form-control" name="email" id="exampleEmail" defaultValue={ workEdit.title } />
                            </div>
                            <div className="col uploadButton">
                                <img className="image" src="./../../assets/images/logo512.png" alt="imay" />
                                <input type="file" id="upload" hidden />
                                <label htmlFor="upload" className="label_upload">Chọn ảnh</label>
                            </div>
                            <div className="col">
                                <input className="form-control" type="text" defaultValue={ workEdit.amount } name="password" id="examplePassword" />
                            </div>
                            <br />
                            <div className="col mr_bt">
                                <select className="form-select" aria-label="Default select example">
                                    <option value={2}>Ẩn</option>
                                    <option selected="true" value={3}>Hiện</option>
                                </select>
                            </div>
                            <button type="button" className="btn btn-primary btn-block">Lưu thay đổi</button>
                            <button type="button" className="btn btn-secondary btn-block mr_left10">Hủy bỏ</button>
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

const mapStateToProps = state => {
    return {
        workEdit: state.workEdit,
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onRequestWorkEditApi: (id) => {
            dispatch(action.actRequesthWorkEditApi(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditWork);
