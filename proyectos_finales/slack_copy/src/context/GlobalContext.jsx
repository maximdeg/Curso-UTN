import { createContext, useContext } from 'react';
import { getWorkspaces, getWorkspaceById } from '../handlers/handleWorkspaces.js';
import { getChannelsFromWorkspace, getChannelById } from '../handlers/handleChannels.js';

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    return (
        <GlobalContext.Provider value={{ getWorkspaces, getChannelsFromWorkspace, getChannelById, getWorkspaceById }}>
            {children}
        </GlobalContext.Provider>
    );
};
const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export { useGlobalContext, GlobalContextProvider };
