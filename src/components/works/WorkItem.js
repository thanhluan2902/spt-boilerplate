import React , { useState }  from 'react';

const WorkItem = ({ work , onDeleteWork , index }) => {
    return (
        <tr key={work.homework_item_id}>
            <th scope="row">{work.homework_item_id}</th>
            <td>{work.title}</td>
            <td><img className="image2" src="logo512.png" alt="logo" /></td>
            <td>{work.amount}</td>
            <td>{work.created_at}</td>
            <td>{work.active === 1 ? "Đăng" : "Ẩn"}</td>
            <td className="mw-50">
                <span className="delete" onClick={() => onDeleteWork(index)}>Xóa</span>
                <span className="edit">Chỉnh sửa</span>
            </td>
        </tr>
    );
}

export default WorkItem;