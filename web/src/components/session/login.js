import React, { createRef, useContext, useState } from "react"
import { useInput } from "../../hooks"
import AuthApi from "../../services/authApi"
import {
  Container,
  Form,
  Title,
  UsernameInput,
  PasswordInput,
  ConfirmButton,
} from "./styles"
import Notification from "../notification"
import { UserContext } from "../../contexts"
import jwtDecode from "jwt-decode"
import { Redirect } from "react-router-dom"
import TopBar from "../topBar"

const Login = () => {
  const matriculaInput = createRef()
  const passwordInput = createRef()
  const { bindMatricula } = useInput("")
  const { bindPassword } = useInput("")
  const [message, setMessage] = useState(null)
  const userContext = useContext(UserContext)
  const { user, setUser } = userContext

  const doLogin = async () => {
    try {
      const response = await AuthApi.authenticate(
        matriculaInput.current.value,
        passwordInput.current.value
      )
      const token = response.data.token
      sessionStorage.setItem("authToken", token)
      setUser(jwtDecode(token).user)
    } catch {
      setMessage(
        "Houve um erro ao realizar o login. Por favor verifique sua credenciais e tente novamente."
      )
    }
  }
  const handleClick = (event) => {
    event.preventDefault()
    doLogin()
  }

  if (user) {
    return <Redirect to='/' />
  }

  return (
    <>
      <TopBar />
      <Container>
        {message && <Notification variant='danger'>{message}</Notification>}
        <Form id='login-form'>
          <Title>Login</Title>
          <UsernameInput
            ref={matriculaInput}
            type='text'
            name='matricula'
            placeholder='Matrícula'
            {...bindMatricula}
          />
          <PasswordInput
            ref={passwordInput}
            type='text'
            name='password'
            placeholder='Senha'
            {...bindPassword}
          />
          <ConfirmButton onClick={handleClick}>Entrar</ConfirmButton>
        </Form>
      </Container>
    </>
  )
}

export default Login
