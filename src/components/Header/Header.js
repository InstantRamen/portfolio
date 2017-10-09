import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react';

const Header = props => {
  return (
    <Menu attached size='massive'>
      <Menu.Item header>
        Derrick Cudd
      </Menu.Item>
    </Menu>  
  );
}

export default Header;
