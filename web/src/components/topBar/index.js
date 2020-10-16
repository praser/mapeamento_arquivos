import React from "react"
import { Bar, Content, Logo, Title } from "./styles"
import logo from "./logo.png"

const TopBar = ({ button }) => {
  return (
    <Bar>
      <Logo src={logo} />
      <Content>
        <Title>Mapeamento de arquivos GEOTR</Title>
        {button}
      </Content>
    </Bar>
  )
}

export default TopBar
