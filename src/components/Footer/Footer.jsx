import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import logo from '../../logo.svg';
import "./Footer.css"

class Nav extends Component {
  constructor() {
    super();
    this.state = { activeItem: null };
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;  
    return (   
        <Menu attached='bottom'>
          <Menu.Item
            name='section1'
            active={activeItem === 'section1'}
            onClick={this.handleItemClick}
          >
            CSS by Semantic UI
          </Menu.Item>

          <Menu.Item
            name='section2'
            active={activeItem === 'section2'}
            onClick={this.handleItemClick}
          >
            Section 2
          </Menu.Item>
          <Menu.Item>
            <img src={logo} className="App-logo" alt="logo" />
          </Menu.Item>
        </Menu>
        );
    }
}

export default Nav;
