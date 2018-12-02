import React, { Fragment } from 'react' 
import { Link } from 'react-router-dom'


const About = (props) => {
    return (
        <Fragment>
            <nav className="navBar">
                <span className="navBar-toggle">
                    <i onClick={props.navBarResponsive} id="icon" className="fa fa-bars"></i>
                </span>
            <p id="logo"><Link to='/' style={{ textDecoration: 'none', color: '#008080' }}>Bethany Mitch</Link></p>
            <ul className={`${props.toggleMenu ? 'mainNav' : 'mainNav-none' }`}>
                <li><Link to='/' style={{ textDecoration: 'none', color: '#008080' }}>Projects</Link></li>
                <li><Link to='/resume' style={{ textDecoration: 'none', color: '#008080' }}>Resume</Link></li>
                <li className="active"><Link to='/about' style={{ textDecoration: 'none', color: '#008080' }}>About</Link></li>
                <li><Link to='/contact' style={{ textDecoration: 'none', color: '#008080' }}>Contact</Link></li>
            </ul>
            </nav>
            <div className="aboutDiv">
            </div>
        </Fragment>
    )
}

export default About 