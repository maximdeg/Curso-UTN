import React from 'react';
import { Link } from 'react-router-dom';

function WorkspaceCard({ workspace }) {
    return (
        <div>
            <Link to={'/workspace/' + workspace.id + '/' + workspace.channels[0].id}>
                <h6>{workspace.name}</h6>
            </Link>
        </div>
    );
}

export default WorkspaceCard;
