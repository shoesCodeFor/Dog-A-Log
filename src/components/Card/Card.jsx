import React from 'react';
import { Card } from 'semantic-ui-react';

const DogCard = (props) => (
    <Card
      image={props.image}
      header={props.name}
      meta={props.breed}
      onClick={()=> props.clickedState(props.id)}
    />
  );

export default DogCard;