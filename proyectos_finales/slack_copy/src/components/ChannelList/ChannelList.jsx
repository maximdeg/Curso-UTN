import React from 'react';

function ChannelList({ channels }) {
    return (
        <div>
            {channels.map((channel) => (
                <div key={channel.id}>{channel.name}</div>
            ))}
        </div>
    );
}

export default ChannelList;
