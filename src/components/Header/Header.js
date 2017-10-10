import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <Menu attached size='large' borderless inverted>
      <Menu.Item header as={Link} to='/'>
        Derrick Cudd
      </Menu.Item>
      <Menu.Menu position='right' >
        <Menu.Item as={Link} to='/projects'>Projects</Menu.Item>
        <Menu.Item as={Link} to='/'>About Me</Menu.Item>
      </Menu.Menu>
    </Menu>  
  );
}

export default Header;
