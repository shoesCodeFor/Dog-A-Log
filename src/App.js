import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Flex, Box } from 'reflexbox';
import Card from './components/Card'
import dawgs from "./dawgs.json";

class App extends Component {
  state = {
    dawgs,
    score: 0
  };

  clickHandler = (id)=>{
    const dawg = this.state.dawgs.filter(dawg=> dawg.id === id);
    if(!dawg.clicked){
      let hs = this.score + 1
      this.setState({score: hs});
    }
    dawg.clicked = true;
  }
  render() {
    return (
      <div className="App">
        <Nav score={this.state.score} />
        <header className="App-header">
        <Flex
          justify='center'
          wrap
          w={1}
          style={{ height: '100%' }}
          mt={2}
          px={3}
          py={4}
        >
            {this.state.dawgs.map(dawg => (
              <Box p={2} w={256}>
                <Card className="dogTag" image={dawg.image} alt={dawg.id} id={dawg.id} clickHandler={this.clickHandler} />
              </Box> 
            ))}
        </Flex>
        </header>
        <Footer />
      </div>
      
    );
  }
}

export default App;
