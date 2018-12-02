import React, { Fragment } from 'react' 
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Fragment>
            <div className="navDiv">
            <ul>
                <li className="active"><Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
                <li><Link to='/projects' style={{ textDecoration: 'none', color: 'black' }}>Projects</Link></li>
                <li><Link to='/resume' style={{ textDecoration: 'none', color: 'black' }}>Resume</Link></li>
                <li><Link to='/about' style={{ textDecoration: 'none', color: 'black' }}>About</Link></li>
                <li><Link to='/contact' style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></li>
            </ul>
            </div>
        </Fragment>
    )
}

export default NavBar 