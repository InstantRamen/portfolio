import React from 'react';

import {
  Card,
  Image,
  Label
} from 'semantic-ui-react';

const ProjectCard = (props) => {
  let tags = props.tags.map((tag, key) => {
    return (<span key={key}><Label circular as='a'> {tag} </Label></span>);
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

