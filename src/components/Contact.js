import React, { Fragment } from 'react' 
import { Link } from 'react-router-dom'


const Contact = (props) => {
    return (
        <Fragment>
            <nav id="littleScreen" className="navBar">
                <span className="navBar-toggle">
                    <i onClick={props.navBarResponsive} id="icon" className="fa fa-bars"></i>
                </span>
            <p id="logo"><Link to='/' style={{ textDecoration: 'none', color: '#008080' }}>bpm</Link></p>
            <ul className={`${props.toggleMenu ? 'mainNav' : 'mainNav-none' }`}>
                <li><Link to='/' style={{ textDecoration: 'none', color: '#008080' }}>Projects</Link></li>
                <li><Link to='/resume' style={{ textDecoration: 'none', color: '#008080' }}>Resume</Link></li>
                <li><Link to='/about' style={{ textDecoration: 'none', color: '#008080' }}>About</Link></li>
                <li className="active"><Link to='/contact' style={{ textDecoration: 'none', color: '#008080' }}>Contact</Link></li>
            </ul>
            </nav>
            <nav id="bigScreen" className="navBar">
            <p id="logo"><Link to='/' style={{ textDecoration: 'none', color: '#008080' }}>bpm</Link></p>
            <ul className={`${props.toggleMenu ? 'mainNav' : 'mainNav-none' }`}>
                <li><Link to='/' style={{ textDecoration: 'none', color: '#008080' }}>Projects</Link></li>
                <li><Link to='/resume' style={{ textDecoration: 'none', color: '#008080' }}>Resume</Link></li>
                <li><Link to='/about' style={{ textDecoration: 'none', color: '#008080' }}>About</Link></li>
                <li className="active"><Link to='/contact' style={{ textDecoration: 'none', color: '#008080' }}>Contact</Link></li>
            </ul>
            </nav>
            <div className="contactDiv">
            <a href= "mailto:your_email" rel="noopener noreferrer"><i id="bigIcon" className="fa fa-envelope"></i></a><a href= "mailto:bethanymitch10@gmail.com" rel="noopener noreferrer"><p>bethanymitch10@gmail.com</p></a>
            <a href="https://www.linkedin.com/in/bethany-mitch/" rel="noopener noreferrer" target="_blank"><i id="bigIcon" className="fa fa-linkedin-square"></i></a><a href="https://www.linkedin.com/in/bethany-mitch/" rel="noopener noreferrer" target="_blank"><p>/in/bethany-mitch/</p></a>
            <a href="https://github.com/justcallmebeef" rel="noopener noreferrer" target="_blank"><i id="bigIcon" className="fa fa-github"></i></a><a href="https://github.com/justcallmebeef" rel="noopener noreferrer" target="_blank"><p>/justcallmebeef</p></a>
            <i id="bigIconPhone" className="fa fa-mobile"></i><p>(715) 688-9727</p>
            </div>
        </Fragment>
    )
}

export default Contact 