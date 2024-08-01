import React from 'react';

function ChannelList({ channels }) {
    const handleClick = () => {
        console.log('click');
    };

    return (
        <div>
            {channels.map((channel) => (
                <div key={channel.id} onClick={handleClick}>
                    {channel.name}
                </div>
            ))}
        </div>
    );
}

export default ChannelList;
