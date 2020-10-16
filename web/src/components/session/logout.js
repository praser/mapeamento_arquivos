import React, { useContext } from "react"
import { UserContext } from "../../contexts"
import { Button } from "./styles"

const Logout = () => {
  const { setUser } = useContext(UserContext)

  const doLogout = () => {
    sessionStorage.removeItem("authToken")
    setUser(null)
  }

  const handleClick = (event) => {
    event.preventDefault()
    doLogout()
  }

  return (
    <Button onClick={handleClick} variant='info'>
      Sair
    </Button>
  )
}

export default Logout
