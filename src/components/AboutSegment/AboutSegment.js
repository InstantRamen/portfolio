import React from 'react';

import {
  Segment,
  Container,
  Header
} from 'semantic-ui-react';

import styles from './styles';

const AboutSegment = (props) => {
  return (
    <Container style={styles.aboutSegment}>
        <Header>{props.title}</Header>
        <p>{props.body}</p>
    </Container>
  );
};

export default AboutSegment;

