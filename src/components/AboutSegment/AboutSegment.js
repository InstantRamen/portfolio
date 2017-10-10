import React from 'react';

import {
  Segment,
  Container,
  Header
} from 'semantic-ui-react';

import styles from './styles';

const AboutSegment = (props) => {
  return (
    <Container>
      <Segment 
        basic
        size="big" 
        style={styles.aboutSegment}
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

