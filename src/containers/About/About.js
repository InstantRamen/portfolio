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

const aboutStyle = {
  color: '#333'
};

class About extends Component {
  render() {
    return (
      <div className="about-page" >
        <ImageHeader src={photoOfMe} />
        <AboutSegment style={aboutStyle} />
      </div>
    );
  }
}

export default About;
