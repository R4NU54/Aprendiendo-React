import { useState } from 'react';
import { createContext } from 'react';

export const UserContext = createContext();

const userDefault = {
  id: 123,
  name: 'Raúl Núñez',
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(userDefault);
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
