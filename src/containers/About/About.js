import React, { Component } from 'react';
import { 
  Container,
  Image,
  Segment,
  Header,
} from 'semantic-ui-react';

import ImageHeader  from '../../components/ImageHeader/ImageHeader';
import AboutSegment from '../../components/AboutSegment/AboutSegment';

import photoOfMe from '../../images/me-0.jpg';

class About extends Component {
  render() {
    return (
      <div className="about-page" >
        <ImageHeader src={photoOfMe} />
        <AboutSegment />
      </div>
    );
  }
}

export default About;
