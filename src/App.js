import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import 'font-awesome/css/font-awesome.min.css'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Resume from './components/Resume'
import './App.css';

library.add(faStroopwafel)

class App extends Component {
  constructor() {
    super() 
    this.state = {
      toggleMenu: true, 
    }
  }

navBarResponsive = () => {
  this.setState ({
    toggleMenu: !(this.state.toggleMenu)
  })
}

  render() {
    return (
      <Fragment>
      <div className="App">
        <Route path="/" exact render={() => (<Projects toggleMenu={this.state.toggleMenu} navBarResponsive={this.navBarResponsive} />
        )}/>
        <Route path="/resume" render={() => (<Resume toggleMenu={this.state.toggleMenu} navBarResponsive={this.navBarResponsive} />
        )}/>
        <Route path="/about" render={() => (<About toggleMenu={this.state.toggleMenu} navBarResponsive={this.navBarResponsive} />
        )}/>
        <Route path="/contact" render={() => (<Contact toggleMenu={this.state.toggleMenu} navBarResponsive={this.navBarResponsive} />
        )}/>
      </div>
      </Fragment>
    );
  }
}

export default App;
