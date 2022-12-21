import React from 'react';
import Logo from "../UI/Logo";

const SideBar = () => {
    return ( 
        <div className='sidenav'>
            <Logo />
            <div className='home' FontAwesomeIcon icon="fa-regular fa-house" />
            <div className='msg' FontAwesomeIcon icon="fa-solid fa-message" />
            <div className='notification' FontAwesomeIcon icon="fa-regular fa-bell" />
            </div>
     );
}
 
export default SideBar;