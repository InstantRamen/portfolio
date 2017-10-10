import React from 'react';

import {
  Card,
  Image,
  Label,
  Segment,
  Icon,
  Button
} from 'semantic-ui-react';

const ProjectCard = (props) => {
  let tags = props.tags.map((tag, key) => {
    return (<span key={key}><Label circular as='a'> {tag} </Label></span>);
  });
  
  return (
    <Card raised>
      <Image src={props.image} centered />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Description>{props.description}</Card.Description>

      </Card.Content>
      
      <Card.Content extra>
        
        <Segment basic size='mini' className='tags' >
          {tags}
        </Segment>
        <Button.Group className='links'>
          <Button basic><Icon name='github' size='large' />Github</Button>
          <Button basic><Icon name='globe' size='large' />Live</Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default ProjectCard;

