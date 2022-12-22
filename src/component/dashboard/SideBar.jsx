import React from "react";
import { AiFillHome } from 'react-icons/ai'
import { IoNotificationsSharp } from 'react-icons/io5'
import { FaUserAlt } from 'react-icons/fa'
import { IoSettings } from 'react-icons/io5'
import { IoLogIn } from 'react-icons/io5'
import { MdSpaceDashboard } from 'react-icons/md'

const SideBar = () => {
  return (
    <div className="sidenav">
      <div className="logo">
    <MdSpaceDashboard color="#fff" size={40} />
      </div>
      <div className="navicon">
        <div className="firstsection">
            <div className="home">
                <AiFillHome color="#fff" size={30}/>
            </div>
            <div className="notification">
                <IoNotificationsSharp color="#fff" size={30}/>
            </div>
        </div>
        <div className="secondsection">
            <div className="user">
            <FaUserAlt color="#fff" size={30}/>
            </div>
            <div className="setting" >
            <IoSettings color="#fff" size={30}/>
            </div>
        </div>
        <div className="thirdsection">
            <div className="logout" >
                <IoLogIn color="#fff" size={30}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
