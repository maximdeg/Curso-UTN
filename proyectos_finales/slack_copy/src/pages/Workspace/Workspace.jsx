import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContext';
import ChannelList from '../../components/ChannelList/ChannelList';
import MessageList from '../../components/MessageList/MessageList';
import MessageInput from '../../components/MessageInput/MessageInput';

function Workspace() {
    const { id_workspace, id_channel } = useParams();
    const { getChannelsFromWorkspace, getWorkspaceById, getChannelById } = useGlobalContext();

    const workspace = getWorkspaceById(id_workspace);
    const channels = getChannelsFromWorkspace(id_workspace);
    const [selectedChannel] = getChannelById(id_workspace, id_channel);

    console.log('workspace', workspace, 'channel', channels, 'selectedChannel', selectedChannel);

    return (
        <>
            <header>
                <div>
                    <h1>{workspace.name}</h1>
                </div>
                <div>
                    <Link to={'/'}>
                        <button>Salir</button>
                    </Link>
                </div>
            </header>

            <aside>
                <div>
                    <h2>Canales</h2>
                    <ChannelList channels={channels} />
                    <button>Crear canal</button>
                </div>
                <div>
                    <input type="text" />
                    <button> Confirmar </button>
                    <button> Cancelar </button>
                </div>
            </aside>

            <main>
                <div>
                    <h2>{selectedChannel.name}</h2>
                </div>
                <MessageList messages={selectedChannel.messages} />
                <MessageInput />
            </main>
        </>
    );
}

export default Workspace;
