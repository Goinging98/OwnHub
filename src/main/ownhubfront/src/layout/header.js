import './header.css'
import React from 'react';
// import Tablist from "./tablist";

const MenuItem = ({ active, children, to }) => (
    <div id="menu-item">{children}</div>
  );


const Header = () => {
    return (
        <header className='header'>
            <p id='logo_title'><a href='/'>💻 OwnHub</a></p>
            <div id="menu">
                <MenuItem><a href='/repository'>Git</a></MenuItem>
                <MenuItem><a href='/members'>사원관리</a></MenuItem>
                <MenuItem><a href='/working'>근태관리</a></MenuItem>
                <MenuItem><a href='/content'>게시판</a></MenuItem>
            </div>
            <p id="login"><a href='/login'>Login</a></p>
        </header>
    )
}

export default Header