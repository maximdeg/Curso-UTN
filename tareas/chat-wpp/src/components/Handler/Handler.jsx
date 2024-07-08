import React from 'react';
import Header from '../Header/Header';
import Messages from '../ChatSection/ChatSection';
import TextInput from '../TextInput/TextInput';
import { DATA_MOOK as messageList } from '../../../data';

import './Handler.css';
function Handler() {
    return (
        <section className="chat-section">
            <Header />
            <Messages messageList={messageList} />
            <TextInput />
        </section>
    );
}

export default Handler;
