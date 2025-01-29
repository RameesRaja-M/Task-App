import { createContext, useState, useEffect } from "react";

// Context create 
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Initialize state from localStorage or default value
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : { uid: "", email: "" };
  });

  // Sync state with localStorage whenever 'user' changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
