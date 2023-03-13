import React, { createContext, useState } from "react";

// Create a new context
export const CountContext = createContext();

// Create a context provider component
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};
