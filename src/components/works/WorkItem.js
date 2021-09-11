import React from 'react';

const WorkItem = () => {
    return (
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
    );
}

export default WorkItem;