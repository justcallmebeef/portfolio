import React, { Fragment } from 'react' 
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'
import Footer from './Footer'

const Projects = (props) => {
    return (
        <Fragment>
            <div className="mainContainer">
                <NavDesktop />
                <NavMobile toggleMenu={props.toggleMenu} navBarResponsive={props.navBarResponsive} />
                <div>
                    <p className="projectP">
                        <h4>Hello human!</h4>
                        I'm Bethany - a Full-Stack Web Developer with a funny nickname.<br></br>
                        This is my portfolio.<br></br>
                        Welcome.
                    </p>
                    <p className="projectP">
                        Below you will find a few of my projects.<br></br> 
                        If you care to venture further, click through to see the code.
                    </p>
                </div>
                <div className="projectsDiv">
                    <a href="https://github.com/justcallmebeef/travel-wish-list" rel="noopener noreferrer" target="_blank">
                        <div className="projectHolder">
                            <div className="project1"></div>
                            <p className="projectTitle">Travel Wish List</p>
                            <p className="desc">A website that allows users to create, udpate, and delete to a travel wish list.</p>
                        </div>
                    </a>
                    <a href="https://github.com/justcallmebeef/fateFrontEnd" rel="noopener noreferrer" target="_blank">
                        <div className="projectHolder">
                            <div className="project2"></div>
                            <p className="projectTitle">Fate</p>
                            <p className="desc">Allows users to rate each other and gives real-time feedback in the form of charts. </p>
                        </div>
                    </a>
                    <a href="https://github.com/justcallmebeef/react-inbox" rel="noopener noreferrer" target="_blank">
                        <div className="projectHolder">
                            <div className="project3"></div>
                            <p className="projectTitle">React Inbox</p>
                            <p className="desc">An inbox that allows the user to update messages, add labels, delete and compose new messages.</p>
                        </div>
                    </a>
                    <a href="https://github.com/justcallmebeef/vue-bookstore" rel="noopener noreferrer" target="_blank">
                        <div className="projectHolder">
                            <div className="project4"></div>
                            <p className="projectTitle">Vue Bookstore</p>
                            <p className="desc">A list of books pulled in from an API using Vue.js.</p>
                        </div>
                    </a>
                </div>
                <Footer />
            </div>
        </Fragment>
    )
}

export default Projects 