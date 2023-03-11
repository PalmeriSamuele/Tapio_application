import React, { useState } from 'react';
import { Switch } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

const SwitchMode = () => {
    const [mode, setMode] = useState(true)
    const changeMode = () => {
        
        if(mode){
         
            
            document.getElementById('tapio-app').classList.remove('light') 
            document.getElementById('tapio-app').classList.add('dark')
        }
        else{
            document.getElementById('tapio-app').classList.remove('dark')
            document.getElementById('tapio-app').classList.add('light')
        }
        setMode(!mode)
       
    }
    return (
        <div>
            <Switch
                className='switch-mode'
                checkedChildren={<FontAwesomeIcon icon={faSun} />}
                unCheckedChildren={<FontAwesomeIcon icon={faMoon} />}
                defaultChecked
                onChange={changeMode}
            />
        </div>
    );
};

export default SwitchMode;