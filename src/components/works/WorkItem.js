import React, { useState } from 'react';

const WorkItem = ({ work, onDeleteWork, index }) => {
    return (
        <tr>
            <td>183</td>
            <td>Đám cưới trong mơ</td>
            <td><img className="image2" src="./assets/images/logo512.png" alt="logo" /></td>
            <td><span className="tag tag-success">Approved</span></td>
            <td>22-12-2021 14:00:00</td>
            <td>Ẩn</td>
            <td className="mw-50">
                <button type="button" className="btn btn-block btn-danger btn-sm"><i className="fa fa-trash" aria-hidden="true" /></button>
                &nbsp;|&nbsp;
                <button type="button" className="btn btn-block btn-success btn-sm"><i className="fa fa-pencil-square-o" aria-hidden="true" /></button>
            </td>
        </tr>
    );
}

export default WorkItem;