import React from 'react';
import Button from './Button';


const Form = () => {
    return ( 
              <form>
                <label>Enter your name:
                  <input type="text" />
                </label>
                <label>Enter your password:
                  <input type="password" />
                </label>
                <Button text="login"/>
              </form>
            )
          }
export default Form;