import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import Logo from './Logo'
import "./Nav.css"

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        activeItem: null,
        score: 0
    };
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;  
    return (
        <div>   
        <Menu>
            <Menu.Item>
                <Logo size="3em" shadow_x="8" shadow_y="9" />
                <h1>Dog-A-Log</h1>
            </Menu.Item>
            
            <Menu.Item
                name='start_over'
                active={activeItem === 'start_over'}
                onClick={this.handleItemClick}
            >
                <Logo className="logo" />
                Start New Game
            </Menu.Item>

            <Menu.Item 
                name='scores' 
                active={activeItem === 'scores'} 
                onClick={this.handleItemClick}>
                High Scores
            </Menu.Item>

            <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={this.handleItemClick}>
                About the Game
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                <h1>Score:  {this.props.score}</h1>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
        
        </div>
        );
    }
}

export default Nav;
