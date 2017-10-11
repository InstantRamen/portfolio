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
        <Header>{props.title}</Header>
        <p>{props.body}</p>
      </Segment> 
    </Container>
  );
};

export default AboutSegment;

