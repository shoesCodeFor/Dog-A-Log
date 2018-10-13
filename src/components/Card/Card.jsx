import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const DogCard = (props) => (
  <Card key={props.id}>
    <Image src={props.image} onClick={() => props.clickHandler(props.id)} />
  </Card>
);

export default DogCard;