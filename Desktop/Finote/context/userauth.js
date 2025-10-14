import React, { createContext, useState, useContext } from 'react';

// Context for user authentication state
export const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Login with user profile object
  const login = (profile) => setUser(profile);

  // Logout clears the user state
  const logout = () => setUser(null);

  return (
    <UserAuthContext.Provider value={{ user, login, logout }}>
      {children}
    </UserAuthContext.Provider>
  );
};

// Custom hook for easier usage
export function useUserAuth() {
  return useContext(UserAuthContext);
}
