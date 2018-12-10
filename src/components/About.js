import React, { Fragment } from 'react' 
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'

const About = (props) => {
    return (
        <Fragment>
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