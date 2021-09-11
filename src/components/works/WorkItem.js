import React from 'react';
import { Link } from "react-router-dom";

const WorkItem = ({ work }) => {
    return (
        <tr className="odd">
            <td className="dtr-control sorting_1" tabIndex={0}>{ work.title }</td>
            <td> <img src="./assets/images/logo512.png" alt="logo" className="images" /> </td>
            <td className="th1">{ work.created_at }</td>
            <td className="th1">{ work.amount }</td>
            <td className="th">{ work.active }</td>
            <td>
                <Link to="/"><button type="button" className="btn btn-block btn-danger btn-sm"><i className="fa fa-trash" aria-hidden="true" /></button></Link>
                &nbsp;|&nbsp;
                <Link to="/edit-work"><button type="button" className="btn btn-block btn-success btn-sm"><i className="fa fa-pencil" aria-hidden="true" /></button></Link>
            </td>
        </tr>
    );
}

export default WorkItem;