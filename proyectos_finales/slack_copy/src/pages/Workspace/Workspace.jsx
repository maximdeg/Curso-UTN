import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useParams, Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContext';
import Header from '../../components/Header/Header';
import ChannelList from '../../components/ChannelList/ChannelList';
import MessageList from '../../components/MessageList/MessageList';
import WorkspaceNavigator from '../../components/WorkspaceNavigator/WorkspaceNavigator';
import './Workspace.css';

function Workspace() {
    const { id_workspace, id_channel } = useParams();
    const {
        getChannelsFromWorkspace,
        getWorkspaceById,
        getChannelById,
        saveMessage,
        getMessagesFromChannel,
        saveChannel,
    } = useGlobalContext();

    const workspace = getWorkspaceById(id_workspace);
    const channels = getChannelsFromWorkspace(id_workspace);

    const [currentChannel] = getChannelById(id_workspace, id_channel);
    const initialStateMessageList = getMessagesFromChannel(id_workspace, id_channel);
    const [newMessageList, setNewMessageList] = useState(initialStateMessageList);
    const [newChannel, setNewChannel] = useState('');

    const handleSubmitMessage = (e, message) => {
        e.preventDefault();
        setNewMessageList([...newMessageList, message]);
        console.log('Sent', message);
        saveMessage(id_workspace, id_channel, message);
    };

    const handleSubmitChannel = (e, channel) => {
        e.preventDefault();
        channel.id = uuid();
        setNewChannel([...newChannel, channel]);
        console.log('Saving channel', channel);
        saveChannel(id_workspace, channel);
    };

    return (
        <>
            <Header workspace_name={workspace.workspace_name} />
            <section className="workspace-container">
                <WorkspaceNavigator />
                <div className="main">
                    <div className="main-navigator">
                        <nav className="channel-navigator">
                            <div className="channels-container">
                                <h2>Canales</h2>
                                <ChannelList id_workspace={id_workspace} channels={channels} />
                                <button>Crear canal</button>
                            </div>
                            <AddChannelForm handleSubmitChannel={handleSubmitChannel} />
                        </nav>
                    </div>

                    <div className="chat-container">
                        <div>
                            <h2>{currentChannel.name}</h2>
                        </div>
                        <MessageList messages={currentChannel.messages} />
                        <MessageInput handleSubmitMessage={handleSubmitMessage} />
                    </div>
                </div>
            </section>
        </>
    );
}

function MessageInput({ handleSubmitMessage }) {
    const initialStateMessage = {
        id: '',
        date: new Date().toLocaleString(),
        username: '',
        image: '',
        message: '',
    };

    const [msgValue, setMsgValue] = useState(initialStateMessage);

    const handleContentChange = (e) => {
        setMsgValue({
            ...msgValue,
            [e.target.name]: e.target.value,
        });
    };

    const handleClearInput = () => {
        setMsgValue(initialStateMessage);
    };

    return (
        <div className="form-container">
            <form
                className="input-form"
                onSubmit={(e) => {
                    handleSubmitMessage(e, { ...msgValue });
                    handleClearInput();
                }}
            >
                <input
                    className="input input-message"
                    type={msgValue.message}
                    id="message"
                    name="message"
                    onChange={handleContentChange}
                    value={msgValue.message}
                    placeholder="Escribe aqui un mensaje..."
                ></input>
                <button className="btn-submit" type="submit">
                    Enviar
                </button>
            </form>
        </div>
    );
}

function AddChannelForm({ handleSubmitChannel }) {
    const initialStateChannel = {
        id: '',
        channel_name: '',
        messages: [],
    };

    const [channelValue, setChannelValue] = useState(initialStateChannel);

    const handleContentChange = (e) => {
        setChannelValue({
            ...channelValue,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="add-channel-container">
            <h3>Añadir canal</h3>
            <form className="add-channel-form" onSubmit={(e) => handleSubmitChannel(e, { ...channelValue })}>
                <label htmlFor="name">Nombre del canal</label>
                <input
                    className="input input-channel"
                    type={channelValue.name}
                    id="channel-name"
                    name="channel_name"
                    onChange={handleContentChange}
                    value={channelValue.name}
                    placeholder="Nuevo canal..."
                />
                <div>
                    <button type="submit"> Confirmar </button>
                    <button type="cancel"> Cancelar </button>
                </div>
            </form>
        </div>
    );
}

export default Workspace;
