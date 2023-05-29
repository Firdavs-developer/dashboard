

import { createContext, useContext, useState } from "react";

// export const UserContext = createContext();
// export const ProductContext = createContext();
// export const BasketContext = createContext();
export const ModeContext = createContext();
export const TokenContext = createContext();

export const ProviderToken = ({ children }) => {
  const [token, setToken] = useState(null);
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};
export const useAuthToken = () => {
  return useContext(TokenContext);
};