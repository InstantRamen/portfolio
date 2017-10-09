import React from 'react';
import { Image } from 'semantic-ui-react';

const imageStyle = {
  maxWidth: '768px'
};

const style = {
  width: '100%',
  backgroundColor: 'black',
  boxShadow: '0px 5px 5px #888'
};

const ImageHeader = (props) => {
  return (
    <div style={style}>
      <Image src={props.src} fluid style={imageStyle} centered />
    </div>  
  );
};

export default ImageHeader;