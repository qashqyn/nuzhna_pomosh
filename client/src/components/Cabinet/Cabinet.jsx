import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

import './styles/main.scss';

const Cabinet = () => {
    return (
        <div id="cabinet">
            <Sidebar />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default Cabinet;