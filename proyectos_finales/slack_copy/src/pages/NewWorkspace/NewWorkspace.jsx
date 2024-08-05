import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

import { useGlobalContext } from '../../context/GlobalContext';

function NewWorkspace() {
    const { createWorkspace, getWorkspaces } = useGlobalContext();
    const [newWorkspace, setNewWorkspace] = useState(getWorkspaces());

    const navigate = useNavigate();
    const initialStateWorkspace = {
        id: uuid(),
        workspace_name: '',
        channels: [
            { channel_name: '# General', messages: [], id: '' },
            { channel_name: '', messages: [], id: '' },
        ],
    };
    const [workspace, setWorkspace] = useState(initialStateWorkspace);

    const handleWorkspaceChange = (e) => {
        setWorkspace({
            ...workspace,
            [e.target.name]: e.target.value,
        });
        console.log(`${e.target.name}: ${e.target.value}`);
    };

    const handleChannelChange = (e) => {
        setWorkspace({
            ...workspace,
            channels: [
                { channel_name: '# General', messages: [], id: uuid() },
                { channel_name: e.target.value, messages: [], id: uuid() },
            ],
        });
    };

    const handleSubmitWorkspace = (e) => {
        e.preventDefault();

        setNewWorkspace([...newWorkspace, workspace]);
        console.log('Saving workspace', workspace);
        createWorkspace(workspace);
        navigate('/');
    };

    return (
        <main>
            <div>
                <h1>Crea un entorno de trabajo</h1>
            </div>
            <div>
                {/* <form onSubmit={(e) => handleSubmitWorkspace(e, { ...workspace })}> */}
                <form onSubmit={(e) => handleSubmitWorkspace(e)}>
                    <div>
                        <label htmlFor="workspace_name">Nombre del entorno de trabajo*</label>
                        <input
                            type={workspace.workspace_name}
                            name="workspace_name"
                            id="workspace_name"
                            onChange={handleWorkspaceChange}
                            value={workspace.workspace_name}
                        />
                    </div>
                    <div>
                        <label htmlFor="channel_name">Nombre del canal #</label>
                        <input
                            type={workspace.channels[1].channel_name}
                            name="channel_name"
                            id="channel_name"
                            onChange={handleChannelChange}
                            value={workspace.channels[1].channel_name}
                        />
                    </div>
                    <div>
                        <button type="submit">Crear</button>
                        <Link to={'/'}>
                            <button>Cancelar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default NewWorkspace;
