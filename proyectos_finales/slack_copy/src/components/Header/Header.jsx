import React from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { IoTimeOutline } from 'react-icons/io5';
import { LuSearch } from 'react-icons/lu';
import { RxQuestionMarkCircled } from 'react-icons/rx';

import './Header.css';

function Header({ workspace_name }) {
    return (
        <header className="header">
            <div className="container empty-container"></div>
            <div className="container navigation-container">
                <nav className="navigator">
                    <button className="btn-navigation">
                        <HiArrowLeft />
                    </button>
                    <button className="btn-navigation">
                        <HiArrowRight />
                    </button>
                    <button className="btn-navigation">
                        <IoTimeOutline className="icon-watch" />
                    </button>
                </nav>
                <div className="search-container">
                    <input className="search-input" type="text" placeholder={`Buscar ${workspace_name}`} />
                    <LuSearch className="search-icon" />
                </div>
            </div>
            <div className="container info-container">
                <button className="btn-navigation">
                    <RxQuestionMarkCircled className="info-icon" />
                </button>
            </div>
        </header>
    );
}

export default Header;
