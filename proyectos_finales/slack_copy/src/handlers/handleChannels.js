import { getWorkspaces, getWorkspaceById } from './handleWorkspaces';

export const getChannelById = (idWorkspace, idChannel) => {
    const workspaceToFind = getWorkspaceById(idWorkspace);
    return workspaceToFind.channels.filter((channel) => channel.id === idChannel);
};

export const getChannelsFromWorkspace = (idWorkspace) => {
    const workspace = getWorkspaceById(idWorkspace);
    return workspace.channels;
};
