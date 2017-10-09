import React, { Component } from 'react';
import { 
  Image,
  Segment,
  Header
} from 'semantic-ui-react';

import me1 from '../../images/me-0.jpg';
class About extends Component {
  render() {
    return (
      <div className="about-page">
        <Image src={me1} fluid />
        <Segment basic size="big">
          <Header>I'm Derrick</Header>
          <p>I'm a developer with a primary focus on web technologies, namely Node/Express on the backend, and React on the frontend. As it stands, I have at least basic experience in React, Node, Ruby/Rails, Java, Python, and C#; </p>
        </Segment>
      </div>
    );
  }
}

export default About;
