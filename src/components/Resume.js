import React, { Fragment } from 'react' 
import resume from './resume.jpg'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'
import Footer from './Footer'


const Resume = (props) => {
    return (
        <Fragment>
            <div className="mainContainer">
                <NavDesktop />
                <NavMobile toggleMenu={props.toggleMenu} navBarResponsive={props.navBarResponsive} />
                <div className="resumeDiv">
                    <a href="https://docs.google.com/document/d/16n3BzpKDFfn1SKDxJNaQt1lctZnLB_1tllDK-_vL89c/export?format=pdf">
                        <div className="resumeButton">Download Bethany's Resume
                            <i id="resumeIcon" class="fa fa-download"></i>
                        </div>
                    </a>
                    <img className="resume" src={resume} alt="resume" />
                </div>
                <Footer />
            </div>
        </Fragment>
    )
}

export default Resume 