import React, { Component } from 'react';
import { 
  Container,
  Card,
  Dropdown,
  Responsive
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
      searchValue: [],
      projects: this.props.data.projects
    };
    
    this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
  }
  
  generateTags(data) {
    return data.map(tag => {
      return {key: tag.key, value: tag.key, text: tag.name}
    });
  }
  
  populateProjects() {
    return this.state.projects.map((project, key) => {
      return (
        <ProjectCard 
          title={project.name}
          description={project.about} 
          image={src} 
          tags={project.tags}
          key={key}
        /> 
      );
    });
  }
  
  handleSearchValueChange(e, { value }) {
    let searchValue = value;
    this.setState({ searchValue });
  }
  
  render() {
    let projects = this.populateProjects();
    
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
          <Responsive as={Card.Group} minWidth={1000} itemsPerRow={3}>
            {projects}
          </Responsive>
          <Responsive as={Card.Group} maxWidth={999} itemsPerRow={2} stackable>
            {projects}
          </Responsive>
        </div>
      </Container>
    );
  }
}

export default Projects;
