import React from 'react';
import { Image } from 'semantic-ui-react';

import styles from './styles';


const ImageHeader = (props) => {
  return (
    <div style={styles.container}>
      <Image src={props.src} fluid centered style={styles.image} />
    </div>  
  );
};

export default ImageHeader;