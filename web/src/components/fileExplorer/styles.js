import styled from "styled-components"
import { Button, Input } from "../session/styles"

export const Table = styled.table`
  border-collapse: collapse;
  margin-bottom: 15px;
`

export const Header = styled.thead``
export const Body = styled.tbody``
export const Row = styled.tr`
  border-bottom: 1px solid;
`
export const HeaderCol = styled.th`
  padding: 10px 0;
  text-align: left;
`

export const Col = styled.td`
  padding: 10px 0;
`

export const Select = styled.select`
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #c3c5c7;
  margin-bottom: 10px;
`

export const Search = styled(Input)`
  width: 30%;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`
export const Controls = styled.div`
  align-self: center;
`

export const ControlButton = styled(Button)`
  margin: 0 2.5px;
  min-width: 38px;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`
