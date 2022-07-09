import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => (
    <header className="fixed top-0 w-screen bg-neutral-50 shadow z-50">
        <div className="flex flex-row h-16 justify-between items-center mx-auto max-w-7xl align-middle">
            <div className="justify-start  flex-1">
                <Link to='/' >
                    <img src="React-icon.svg" className="h-12"></img>
                </Link>
            </div>
            <div className="flex-6">
                <div className="flex flex-row space-x-6 last:mr-2">
                <Link className="baselink" to="/">Home</Link>
                <Link className="baselink" to="/about">About</Link>
                </div>
            </div>

        </div>
    </header>

)

export default NavBar;