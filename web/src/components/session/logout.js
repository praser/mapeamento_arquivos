import React, { useContext } from 'react'
import { UserContext } from '../../contexts';
import { LogoutButton } from './styles';

const Logout = () => {
  const { setUser } = useContext(UserContext);

  const doLogout = () => {
    sessionStorage.removeItem('authToken');
    setUser(null);
  }

  const handleClick = event => {
    event.preventDefault();
    doLogout();
  }

  return (
    <LogoutButton onClick={handleClick}>Sair</LogoutButton>
  )
}

export default Logout;