import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Flex, Box } from 'reflexbox';
import dawgs from "./dawgs.json";

class App extends Component {
  state = {
    dawgs
  };

  render() {
    return (
      <div className="App">
        <Nav />
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
                <img className="dogTag" src={dawg.image} alt={dawg.id} />
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
