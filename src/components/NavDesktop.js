import React from 'react' 
import { Link, NavLink } from 'react-router-dom'


const NavDesktop = () => {
    return (
        <nav id="bigScreen" className="navBar">
            <div className="logoContainer">
                <p id="logo">
                    <Link to='/' style={{ textDecoration: 'none', color: '#008080' }}>bpm</Link>
                </p>
                <p className="logoName">bethany p. mitch</p>
            </div>
            <div>
            <ul className="mainNav">
                <li><NavLink exact={true} activeClassName="selected" to='/' style={{ textDecoration: 'none', color: '#008080' }}>Projects</NavLink></li>
                <li><NavLink activeClassName="selected" to='/resume' style={{ textDecoration: 'none', color: '#008080' }}>Resume</NavLink></li>
                <li><NavLink activeClassName="selected" to='/about' style={{ textDecoration: 'none', color: '#008080' }}>About</NavLink></li>
                <li><NavLink activeClassName="selected" to='/contact' style={{ textDecoration: 'none', color: '#008080' }}>Contact</NavLink></li>
            </ul>
            </div>
        </nav>
    )
}

export default NavDesktop 