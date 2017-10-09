import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react';

const Header = props => {
  return (
    <Menu attached size='massive' borderless inverted>
      <Menu.Item header as='h2' link>
        Derrick Cudd
      </Menu.Item>
    </Menu>  
  );
}

export default Header;
