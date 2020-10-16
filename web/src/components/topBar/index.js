import React from "react"
import { Bar, Logo, Title } from "./styles"
import logo from "./logo.png"

const TopBar = ({ button }) => {
  return (
    <Bar>
      <Logo src={logo} />
      <Title>Mapeamento de arquivos GEOTR</Title>
      {button}
    </Bar>
  )
}

export default TopBar
