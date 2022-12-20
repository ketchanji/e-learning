import React from 'react';

const Logo = (props) => {
        const handleClick = () => {
          props.onClick();
        };

    return ( 
        <div className="logo">
                <p onClick={handleClick}><span>E</span>-Learn<span>.</span></p>
            </div>
     );
};
 
export default Logo;
