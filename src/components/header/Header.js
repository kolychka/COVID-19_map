import React from 'react';
import '../css/header.css';

class Header extends React.Component { 
    render() {
        return (
            <header className="item item__header header_margin">
                <div className="default-block header">
                    <h1 className="header__name h1 h1_padding">COVID-19 Dashboard by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University (JHU)</h1>
                </div>
            </header>
        );
    }
}

export default Header;