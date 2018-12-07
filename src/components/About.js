import React, { Fragment } from 'react' 
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'


// photo link: https://images.unsplash.com/photo-1469122312224-c5846569feb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1152&q=80
// computer: https://images.unsplash.com/photo-1527234639945-70d78416bd7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1019&q=80
const About = (props) => {
    return (
        <Fragment>
            {/* <nav id="littleScreen" className="navBar">
                <span className="navBar-toggle">
                    <i onClick={props.navBarResponsive} id="icon" className="fa fa-bars"></i>
                </span>
            <p id="logo"><Link to='/' style={{ textDecoration: 'none', color: '#008080' }}>bpm</Link></p>
            <ul className={`${props.toggleMenu ? 'mainNav' : 'mainNav-none' }`}>
                <li><Link to='/' style={{ textDecoration: 'none', color: '#008080' }}>Projects</Link></li>
                <li><Link to='/resume' style={{ textDecoration: 'none', color: '#008080' }}>Resume</Link></li>
                <li className="active"><Link to='/about' style={{ textDecoration: 'none', color: '#008080' }}>About</Link></li>
                <li><Link to='/contact' style={{ textDecoration: 'none', color: '#008080' }}>Contact</Link></li>
            </ul>
            </nav>
            <nav id="bigScreen" className="navBar">
            <p id="logo"><Link to='/' style={{ textDecoration: 'none', color: '#008080' }}>bpm</Link></p>
            <ul className={`${props.toggleMenu ? 'mainNav' : 'mainNav-none' }`}>
                <li><Link to='/' style={{ textDecoration: 'none', color: '#008080' }}>Projects</Link></li>
                <li><Link to='/resume' style={{ textDecoration: 'none', color: '#008080' }}>Resume</Link></li>
                <li className="active"><Link to='/about' style={{ textDecoration: 'none', color: '#008080' }}>About</Link></li>
                <li><Link to='/contact' style={{ textDecoration: 'none', color: '#008080' }}>Contact</Link></li>
            </ul>
            </nav> */}
            <NavDesktop />
            <NavMobile toggleMenu={props.toggleMenu} navBarResponsive={props.navBarResponsive} />
            <div className="parallax">
            </div>
            <div className="aboutDiv">
                <section className="section">
                <p>About Bethany:
                <ul>
                    <li>My nickname is Beef</li>
                    <li>Born and raised in Wisconsin - a true cheesehead at heart</li>
                    <li>BA in Mass Communication with a minor in Computer Science</li>
                    <li>Studied abroad in Scotland</li>
                    <li>Lived in Minneapolis, MN while working in Advertising</li>
                    <li>Moved to Colorado to work for Avid 4 Adventure</li>
                    <li>After hours:
                        <ul>
                            <li>Rock Climbing</li>
                            <li>Ultimate Frisbee</li>
                            <li>Volleyball</li>
                            <li>Camping</li>
                            <li>Reading</li>
                        </ul>
                    </li>
                </ul>
                </p>
                </section>
            </div>
        </Fragment>
    )
}

export default About 