import React from 'react';
import Button from './Button';


const NavBar = (props) => {
    return ( 
        <div>
            <div className="navbar">
            <div className="logo">
                <p><span>E</span>-Learn<span>.</span></p>
            </div>
                <Button text="Login" />
            </div><hr />
        </div>
        
     );
}
 
export default NavBar;