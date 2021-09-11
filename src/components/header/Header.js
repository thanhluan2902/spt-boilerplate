import React from 'react';
import './Header.css';

const Header = ({ onToggleMargin }) => {
    return (
        <div className="main_navbar headding">
            <h1>
                <i className="fa fa-bars" aria-hidden="true" id="toggle_nav" onClick={ onToggleMargin } /> Việc nhà
            </h1>
        </div>
    );
}

export default Header;
