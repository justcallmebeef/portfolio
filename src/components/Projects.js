import React, { Fragment } from 'react' 
import { Link } from 'react-router-dom'


const Projects = (props) => {
    return (
        <Fragment>
            <nav className="navBar">
                <span className="navBar-toggle">
                    <i onClick={props.navBarResponsive} id="icon" className="fa fa-bars"></i>
                </span>
            <p id="logo"></p>
            <ul className={`${props.toggleMenu ? 'mainNav' : 'mainNav-none' }`}>
                <li className="active"><Link to='/' style={{ textDecoration: 'none', color: '#008080' }}>Projects</Link></li>
                <li><Link to='/resume' style={{ textDecoration: 'none', color: '#008080' }}>Resume</Link></li>
                <li><Link to='/about' style={{ textDecoration: 'none', color: '#008080' }}>About</Link></li>
                <li><Link to='/contact' style={{ textDecoration: 'none', color: '#008080' }}>Contact</Link></li>
            </ul>
            </nav>
            <div className="projectsDiv">
            <p className="homeP">Hello human! I'm Bethany - a Full-Stack Web Developer.</p>
            </div>
        </Fragment>
    )
}

export default Projects 