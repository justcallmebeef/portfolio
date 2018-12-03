import React, { Fragment } from 'react' 
import { Link } from 'react-router-dom'
import resume from './resume.jpg'


const Resume = (props) => {
    return (
        <Fragment>
            <nav className="navBar">
                <span className="navBar-toggle">
                    <i onClick={props.navBarResponsive} id="icon" className="fa fa-bars"></i>
                </span>
            <p id="logo"><Link to='/' style={{ textDecoration: 'none', color: '#008080' }}>bpm</Link></p>
            <ul className={`${props.toggleMenu ? 'mainNav' : 'mainNav-none' }`}>
                <li><Link to='/' style={{ textDecoration: 'none', color: '#008080' }}>Projects</Link></li>
                <li className="active"><Link to='/resume' style={{ textDecoration: 'none', color: '#008080' }}>Resume</Link></li>
                <li><Link to='/about' style={{ textDecoration: 'none', color: '#008080' }}>About</Link></li>
                <li><Link to='/contact' style={{ textDecoration: 'none', color: '#008080' }}>Contact</Link></li>
            </ul>
            </nav>
            <div className="resumeDiv">
            <a href="https://docs.google.com/document/d/16n3BzpKDFfn1SKDxJNaQt1lctZnLB_1tllDK-_vL89c/export?format=pdf">
                    <div className="resumeButton">Download Bethany's Resume</div>
                </a>
                <img className="resume" src={resume} alt="resume" />
            </div>
        </Fragment>
    )
}

export default Resume 