import React, { Component } from 'react';
import { Flex } from 'reflexbox';

class FlexContainer extends Component {
  render() {
    return (
     
    <Flex
      justify='center'
      wrap
      w={1}
      style={{ height: '100%' }}
      mt={2}
      px={3}
      py={4}
    />
      
    );
  }
}

export default FlexContainer;
