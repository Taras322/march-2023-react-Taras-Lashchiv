import React from 'react';
import {Link} from "react-router-dom";
import {AppRoutes} from "../../routing/AppRoutes";


const Navbar = () => {
    const links = [
        {
            path: AppRoutes.MAIN,
            label: 'Main'
        },
        {
            path: AppRoutes.LOGIN,
            label: 'Login'
        },
        {
            path: AppRoutes.USERS,
            label: 'Users'
        },
        {
            path: AppRoutes.USERS_INFO,
            label: 'Users-info'
        },
    ]
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-evenly', backgroundColor:'yellow', height: 40}}>
            {links.map((link)=>(<Link to={link.path} key={link.id}>{link.label}</Link>))}

        </div>
    );
};

export default Navbar;