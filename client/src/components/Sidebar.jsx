import React from 'react';
import GenresBar from "./SidebarBlocks/GenresBar";
import DeveloperBar from "./SidebarBlocks/DeveloperBar";

const Sidebar = () => {

    return (
        <div>
            <div className='mb-4'>
                <GenresBar/>
            </div>
            <div className='mb-4'>
                <DeveloperBar/>
            </div>
        </div>
    );
};

export default Sidebar;