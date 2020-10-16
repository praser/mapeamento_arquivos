import React from "react"
import { Select } from "./styles"

function PageSize({ sizes, ...rest }) {
  return (
    <Select {...rest}>
      {sizes.map((size) => (
        <option key={size} value={size}>
          Mostrar {size} arquivos
        </option>
      ))}
    </Select>
  )
}

export default PageSize
