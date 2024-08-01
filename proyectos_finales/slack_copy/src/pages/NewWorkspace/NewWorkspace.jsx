import React from 'react';
import { Link } from 'react-router-dom';

function NewWorkspace() {
    return (
        <main>
            <div>
                <h1>Crea un entorno de trabajo</h1>
            </div>
            <div>
                <form>
                    <div>
                        <label htmlFor="workspace_name">Nombre del entorno de trabajo*</label>
                        <input type="text" name="workspace_name" />
                    </div>
                    <div>
                        <label htmlFor="channel_name">Nombre del canal #</label>
                        <input type="text" name="channel_name" />
                    </div>
                </form>
                <div>
                    <button>Crear</button>
                    <Link to={'/'}>
                        <button>Cancelar</button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default NewWorkspace;
