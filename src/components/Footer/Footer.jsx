import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import logo from '../../logo.svg';
import "./Footer.css"

class Footer extends Component {
  constructor() {
    super();
    this.state = { activeItem: null };
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;  
    return (   
        <Menu attached='bottom' id="attributionNav">
          <Menu.Item
            name='section2'
            active={activeItem === 'section2'}
            onClick={this.handleItemClick}
          >
            <a href="http://shoesCodeFor.github.io/" target="_blank" rel="noopener noreferrer">
            Built By Schuyler Ankele with: 
            </a>
          </Menu.Item>
          <Menu.Item>
            <img src={logo} className="App-logo" alt="logo" />
          </Menu.Item>
          <Menu.Item
            name='section1'
            active={activeItem === 'section1'}
            onClick={this.handleItemClick}
          >
            <a href="http://react.semantic-ui.com/" target="_blank" rel="noopener noreferrer">
            CSS by Semantic UI
            </a>
          </Menu.Item>
        </Menu>
        );
    }
}

export default Footer;
