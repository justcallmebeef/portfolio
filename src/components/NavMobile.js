import React from 'react' 
import { Link, NavLink } from 'react-router-dom'


const NavMobile = (props) => {
    return (
        <nav id="littleScreen" className="navBar">
            <span className="navBar-toggle">
                <i onClick={props.navBarResponsive} id="icon" className="fa fa-bars"></i>
            </span>
            <div className="logoContainer">
                <p id="logo">
                    <Link to='/' style={{ textDecoration: 'none', color: '#008080' }}>bpm</Link>
                </p>
                <p className="logoName">bethany p. mitch</p>
            </div>            
            <ul className={`${props.toggleMenu ? 'mainNav-none' : 'mainNav' }`}>
                <li className="navLink"><NavLink exact={true} activeClassName="selected" to='/' style={{ textDecoration: 'none', color: '#008080' }}>Projects</NavLink></li>
                <li className="navLink"><NavLink activeClassName="selected" to='/resume' style={{ textDecoration: 'none', color: '#008080' }}>Resume</NavLink></li>
                <li className="navLink"><NavLink activeClassName="selected" to='/about' style={{ textDecoration: 'none', color: '#008080' }}>About</NavLink></li>
                <li className="navLink"><NavLink activeClassName="selected" to='/contact' style={{ textDecoration: 'none', color: '#008080' }}>Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavMobile 