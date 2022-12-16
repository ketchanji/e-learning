import React from 'react';


const Button = (props) => {
    const handleClick = () => {
        console.log(props.text);
        console.log(props.style);
    };
    return ( 
        <button className='btn' style={props.style} onClick={ handleClick }>{ props.text }    
        </button>
     );
}
 
export default Button;