import React from 'react';
import money from '../../images/money.png';
import './Header.css';

const Header = () => (
    <div className="header">
        <nav>
            <a id="home" href="/index">
                Friends Salary
            </a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </nav>
        <div className="top-banner">
            <h1>Spend Your Friends Money...</h1>
            <img src={money} alt="" />
        </div>
    </div>
);

export default Header;
