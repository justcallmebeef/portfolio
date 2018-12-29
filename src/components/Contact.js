import React, { Fragment } from 'react' 
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'
import Footer from './Footer'

const Contact = (props) => {
    return (
        <Fragment>
            <NavDesktop />
            <NavMobile toggleMenu={props.toggleMenu} navBarResponsive={props.navBarResponsive} />
            <div className="contactDiv">
            <a href= "mailto:bethanymitch10@gmail.com" rel="noopener noreferrer"><i id="bigIcon" className="fa fa-envelope"></i></a><a href= "mailto:bethanymitch10@gmail.com" rel="noopener noreferrer"><p>bethanymitch10@gmail.com</p></a>
            <a href="https://www.linkedin.com/in/bethany-mitch/" rel="noopener noreferrer" target="_blank"><i id="bigIcon" className="fa fa-linkedin-square"></i></a><a href="https://www.linkedin.com/in/bethany-mitch/" rel="noopener noreferrer" target="_blank"><p>/in/bethany-mitch/</p></a>
            <a href="https://github.com/justcallmebeef" rel="noopener noreferrer" target="_blank"><i id="bigIcon" className="fa fa-github"></i></a><a href="https://github.com/justcallmebeef" rel="noopener noreferrer" target="_blank"><p>/justcallmebeef</p></a>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Contact 