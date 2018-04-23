import React, { Component } from 'react';
import Routes from './routes';
import './App.css';
import Nav from './components/Navbar';
import {withRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <section id='body'>
        {this.props.location.pathname!='/' && <Nav/>}
        <Routes/>
      </section>
    );
  }
}

export default withRouter(App);
