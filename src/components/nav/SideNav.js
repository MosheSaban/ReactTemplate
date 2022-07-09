import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => (
    <>
        <div className="h-screen left-0 fixed bg-zinc-100 z-40 shadow-md">
            <div className="flex flex-col  mt-16 w-64">
                <Link to="/" className="baselink mx-2 mt-2 border-b-2 border-stone-500 rounded-none" >Item 1</Link>
                <Link to="/" className="baselink mx-2 mt-2 border-b-2 border-stone-500 rounded-none" >Item 2</Link>
                <Link to="/" className="baselink mx-2 mt-2 border-b-2 border-stone-500 rounded-none" >Item 3</Link>
            </div>
        </div>
    </>
)

export default SideNav;