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
    let { title, body } = this.props.data;
    return (
      <div className="about-page" >
        
        <ImageHeader src={photoOfMe} />
        <AboutSegment title={title} body={body} />
      </div>
    );
  }
}

export default About;
