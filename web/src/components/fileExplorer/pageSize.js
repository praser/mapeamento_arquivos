import React from "react"

function PageSize({ sizes, ...rest }) {
  return (
    <select {...rest}>
      {sizes.map((size) => (
        <option key={size} value={size}>
          Mostrar {size} arquivos
        </option>
      ))}
    </select>
  )
}

export default PageSize
