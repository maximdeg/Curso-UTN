import React from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import WorkspaceList from '../../components/WorkspaceList/WorkspaceList';
function Home() {
    const { getWorkspaces } = useGlobalContext();
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
                    <button>Crear entorno</button>
                </div>
            </section>
        </main>
    );
}

export default Home;
