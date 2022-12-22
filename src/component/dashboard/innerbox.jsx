import React from "react";
import { BiLeftArrow } from "react-icons/bi";
import { BsFillVolumeMuteFill } from "react-icons/bs";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsMicFill } from "react-icons/bs";
import { ImPhoneHangUp } from "react-icons/im";
import { ImEnlarge } from "react-icons/im";
import Videobox from "./videobox";

const Video = () => {
  return (
    <div className="vidbox">
      <div className="header">
        <div className="title">
          <BiLeftArrow color="#fff" size={30} /> <h1>Product Presentation</h1>
        </div>
        <div className="timer">
          <p>
            Time remaining: <span>17:45</span>
          </p>
        </div>
      </div>

      <div className="videoBox">
        <Videobox />
        <Videobox />
        <Videobox />
        <Videobox />
      </div>
      <div className="bottom">
        <div className="buttons">
            <BsFillVolumeMuteFill color="#fff" size={35}/>
            <BsFillCameraVideoFill color="#fff" size={35}/>
            <ImPhoneHangUp color="#fff" size={35}/>
            <BsMicFill color="#fff" size={35}/>
            <ImEnlarge color="#fff" size={35}/>
        </div>
      </div>
    </div>
  );
};

export default Video;
