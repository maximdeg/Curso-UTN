import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContext';

function ChannelList({ id_workspace, channels }) {
    return (
        <div>
            {channels.map((channel) => (
                <div key={channel.id}>
                    <Link to={'/workspace/' + id_workspace + '/' + channel.id}>
                        <div name="channel" id={channel.id}>
                            {`# ${channel.channel_name}`}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ChannelList;
