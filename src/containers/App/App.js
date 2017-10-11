import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import Header   from '../../components/Header/Header';
import About    from '../../containers/About/About';
import Projects from '../../containers/Projects/Projects';

import data from '../../data/';

import styles from './styles/';

class App extends Component {
  
  componentWillMount() {
    document.title = data.info.name;
  }
  
  render() {
    return (
      <div className='App' style={styles.app}>
      
        <Header title={data.info.name} />
        <Route exact path='/' render={props => <About {...props} data={data.about} />} />
        <Route 
          exact 
          path='/projects' 
          render={(props) => <Projects {...props} data={data} />} 
        />
      </div>
    );
  }
}

export default App;
