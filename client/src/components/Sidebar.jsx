import React from 'react';
import GenresBar from "./SidebarBlocks/GenresBar";
import BrandsBar from "./SidebarBlocks/BrandsBar";

const Sidebar = () => {

    return (
        <div>
            <div className='mb-4'>
                <GenresBar/>
            </div>
            <BrandsBar/>
        </div>
    );
};

export default Sidebar;