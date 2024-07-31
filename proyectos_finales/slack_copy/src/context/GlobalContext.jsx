import { createContext } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { useGlobalContext, GlobalContextProvider };
