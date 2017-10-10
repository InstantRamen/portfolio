import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';

import Header from '../../components/Header/Header';
import About  from '../../containers/About/About';
import Projects from '../../containers/Projects/Projects';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        
        <Projects />
      </div>
    );
  }
}

export default App;
