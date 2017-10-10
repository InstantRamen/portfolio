import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';

import Header from '../../components/Header/Header';
import About  from '../../containers/About/About';
import Projects from '../../containers/Projects/Projects';

import data from '../../data/';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header title={data.info.name} />
        <Projects data={data} />
      </div>
    );
  }
}

export default App;
