import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {Routes} from "../../routing/Routes";

const Navbar = () => {
    const links = [
        {
            path:Routes.MAIN,
            label:'Main'
        },
        {
            path:Routes.TODO,
            label:'Todo'
        },
        {
            path:Routes.ALBUMS,
            label:'Albums'
        },
        {
            path:Routes.COMMENTS,
            label:'Comments'
        }
    ]
    return (
        <div style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'space-evenly',
                backgroundColor:'aqua',
                height:40
            }}>
            {links.map((link)=>(<Link to={link.path} key={link.id}>{link.label}</Link>))}
            <Outlet/>
        </div>

    );
};

export default Navbar;