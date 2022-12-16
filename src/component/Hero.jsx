import React from 'react';
import Button from './Button';
import vid from '../vid.jpg';
import vid2 from '../vid2.jpg';
import vid3 from '../vid3.jpg';
import vid4 from '../vid4.webp';


const Hero = (props) => {
    return ( 
        <div className="container">
            <div className="container1">
                <div className="smallcontain">
                <h1>Get The Best Video Class Arround <span>The Globe</span> For Your Academic Success<span>.</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo veritatis, harum reiciendis excepturi impedit dignissimos!</p>
                </div>
                <div className="mediumcontain">
                    <Button text="Sign-Up" style={{backgroundColor: "orange",marginRight: "15px"}} />
                    <Button text="Learn More" />
                </div>
            </div>
            <div className="container2">
                <div className="firstside">
                    <img src={vid3} alt="" />
                    <div className="bar">
                        <h1>Pablo Escobar</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nam velit exercitationem fugiat, sequi suscipit? Illum praesentium vero dicta sunt repellat.</p>
                    </div>
                </div>
                <div className="secondside">
                    <span> <img src={vid2} alt="" /> </span>
                    <span> <img src={vid4} alt="" /> </span>
                    <span> <img src={vid} alt="" /> </span>
                </div>
            </div>
        </div>
     );
    }

 
export default Hero;