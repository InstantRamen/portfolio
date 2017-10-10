import React from 'react';

import {
  Card,
  Image,
  Label
} from 'semantic-ui-react';

const ProjectCard = (props) => {
  let tags = props.tags.map(tag => {
    return <Label circular as='a'> {tag} </Label>;
  });
  
  return (
    <Card raised>
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Image src={props.image} />
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span className='tags'>{tags}</span>
      </Card.Content>
    </Card>
  );
};

export default ProjectCard;

