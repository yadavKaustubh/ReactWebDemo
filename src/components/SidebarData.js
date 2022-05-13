import React from 'react';
import * as AiIcons from 'react-icons/ai';

export const SidebarData= [
    {
        title : "Home",
        path : '/',
        icon : <AiIcons.AiFillHome/>,
        cName : 'nav-text'
    },
    {
        title : "About",
        path : '/about',
        icon : <AiIcons.AiOutlineInfoCircle/>,
        cName : 'nav-text'
    },
    {
        title : "Projects",
        path : '/projects',
        icon : <AiIcons.AiTwotoneExperiment/>,
        cName : 'nav-text'
    },
    {
        title : "Contact",
        path : '/contact',
        icon : <AiIcons.AiOutlineContacts/>,
        cName : 'nav-text'
    }
    
]