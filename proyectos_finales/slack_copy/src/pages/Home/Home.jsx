import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContext';
import WorkspaceList from '../../components/WorkspaceList/WorkspaceList';

function Home() {
    const { getWorkspaces} = useGlobalContext();
    const workspaceList = getWorkspaces();
    
    return (
        <main>
            <section>
                <div>
                    <h1>Bienvenido a Macks</h1>
                </div>
                <div>
                    <div>
                        <h4>Entorno de trabajo</h4>
                    </div>
                    <div>
                        <WorkspaceList workspaceList={workspaceList} />
                    </div>
                </div>
                <div>
                    <Link to={'/workspace/new'}>
                        <button>Crear entorno</button>
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Home;
