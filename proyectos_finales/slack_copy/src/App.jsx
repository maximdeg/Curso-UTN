import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import Workspace from './pages/Workspace/Workspace.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workspace/:id_workspace/:id_channel" element={<Workspace />} />
        </Routes>
    );
}

export default App;
