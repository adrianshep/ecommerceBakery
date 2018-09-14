import React, { Component } from 'react';
import {Nav, NavItem} from 'react-bootstrap';

const BakeryNav = (props) => {
  return (
    <Nav bsStyle="pills" onSelect={props.selectProp} activeKey={1} style={{display: 'block', height: '50px', width:'100%', paddingLeft: '50%'}}>
      <NavItem eventKey={'home'}>
        Home
      </NavItem>
      <NavItem eventKey={'shop'}>
        Shop
      </NavItem>
      <NavItem eventKey={'contact'}>
        Contact
      </NavItem>
    </Nav>
  )
}

export default BakeryNav;
