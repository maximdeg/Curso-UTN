import React from 'react';
import WorkspaceCard from '../WorkspaceCard/WorkspaceCard';

function WorkspaceList({ workspaceList }) {
    return (
        <div>
            {workspaceList.map((workspace, index) => (
                <WorkspaceCard key={index} workspace={workspace} />
            ))}
        </div>
    );
}

export default WorkspaceList;
