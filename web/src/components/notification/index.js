import React from 'react'
import { Container, Text } from './styles';

const Notification = ({children}) => {
  return (
    <Container>
      <Text>{ children }</Text>
    </Container>
  );
};

export default Notification;