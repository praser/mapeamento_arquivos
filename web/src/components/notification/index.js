import React from "react"
import { Container, Text } from "./styles"

const Notification = ({ children, variant }) => {
  return (
    <Container variant={variant}>
      <Text>{children}</Text>
    </Container>
  )
}

export default Notification
