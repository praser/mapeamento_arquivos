import React, { createContext, useState } from 'react';
import jwtDecode from 'jwt-decode';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const token = sessionStorage.getItem('authToken');
  const _user = token ? jwtDecode(token).user : null;
  const [ user, setUser ] = useState(_user);

  return <UserContext.Provider value={{ user, setUser }} >{children}</UserContext.Provider>;
};