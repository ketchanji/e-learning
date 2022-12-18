import React from 'react';

const Input = (props) => {
    const handleClick = () => {
        console.log(props.type);
        console.log(props.placeholder);
        console.log(props.name);
    };
    return ( 
        <input name='props.name' placeholder={props.type} type={props.type} onClick={ handleClick }/>
     );
}
 
export default Input;