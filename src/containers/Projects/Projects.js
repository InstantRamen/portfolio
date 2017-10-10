import React, { Component } from 'react';
import { 
  Container,
  Image,
  Segment,
  Header,
  Card,
  Dropdown
} from 'semantic-ui-react';

import ProjectCard from '../../components/ProjectCard/ProjectCard';

import styles from './styles'

import src from './images/temp.gif';

class Projects extends Component {
  constructor(props) {
    super(props);
    
    let tags = this.generateTags(this.props.data.all_tags);
    
    this.state = {
      tags,
      searchValue: []
    };
    
    this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
  }
  
  generateTags(data) {
    return data.map((tag) => {
      return {key: tag.key, value: tag.key, text: tag.name}
    });
  }
  
  handleSearchValueChange(e, { value }) {
    let searchValue = value;
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
            options={this.state.tags}
            onChange={this.handleSearchValueChange}
            value={this.state.searchValue}
          />
        </div>
        <div className='project-list'>
          <Card.Group itemsPerRow={3} stackable>
            <ProjectCard 
              title="Todo App"
              description="a very simple todo application" 
              image={src} 
              tags={['react', 'node']}
            />
          </Card.Group>
        </div>
      </Container>
    );
  }
}

export default Projects;
