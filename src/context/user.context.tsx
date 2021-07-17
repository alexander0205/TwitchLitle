import React from 'react';
const defaultUserContext = {
  isLogged: false,
  data: { uid: '', email: '', photoURL: '' },
};

export const userContext = React.createContext(defaultUserContext);
