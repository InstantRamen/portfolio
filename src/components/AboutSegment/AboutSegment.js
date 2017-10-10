import React from 'react';

import {
  Segment,
  Container,
  Header
} from 'semantic-ui-react';


const style = {
  color: '#333'
};

const AboutSegment = (props) => {
  return (
    <Container>
      <Segment 
        basic 
        centered
        size="big" 
        style={style}
        padded='very'
      >
        <Header>I'm Derrick</Header>
        <p>
          I'm a developer with a primary focus on web technologies, 
          namely Node/Express on the backend, and React on the frontend.
          As it stands, I have at least basic experience in React,
          Node, Ruby/Rails, Java, Python, and C#.
        </p>
      </Segment> 
    </Container>
  );
};

export default AboutSegment;

