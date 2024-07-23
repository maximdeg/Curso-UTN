import { createContext, useContext, useState } from "react";
import { getContacts, getContactById, saveMessage } from "../helpers/contacts";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [contacts, setContacts] = useState(getContacts());

    return (
        <GlobalContext.Provider
            value={{
                contacts,
                getContacts,
                saveMessage,
                getContactById,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => {
    //  Esto devuelve el objeto value del GlobalContextProvider
    return useContext(GlobalContext);
};

export { useGlobalContext, GlobalContextProvider };
