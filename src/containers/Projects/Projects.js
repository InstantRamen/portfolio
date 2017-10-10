import React, { Component } from 'react';
import { 
  Container,
  Image,
  Segment,
  Header,
  Card,
  Dropdown
} from 'semantic-ui-react';

import styles from './styles'

import src from './images/temp.gif';

const tags = [
  { key: 'react', value: 'react', text: 'React' },
  { key: 'node', value: 'node', text: 'NodeJS' }
];

class Projects extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentTags: [],
      searchValue: []
    };
    
    this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
  }
  
  handleSearchValueChange(e, { value }) {
    let searchValue = value;
    console.log(searchValue);
    this.setState({ searchValue });
  }
  
  render() {
    return (
      <Container className='projects-page' style={styles.projectsPage}>
        <div className='project-search' style={styles.searchBar}>
          <Dropdown 
            placeholder='tag' 
            fluid 
            multiple 
            search 
            selection 
            options={tags}
            onChange={this.handleSearchValueChange}
            value={this.state.searchValue}
          />
        </div>
        <div className='project-list'>
          <Card.Group itemsPerRow={3} stackable>
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
            <Card raised image={src} />
          </Card.Group>
        </div>
      </Container>
    );
  }
}

export default Projects;
