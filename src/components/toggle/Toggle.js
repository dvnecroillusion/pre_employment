import React from 'react';
import Switch from "react-switch";

const Toggle = ({value = false, onChange = () => {}}) => {
    return(
        <Switch
            onChange={onChange}
            checked={!value}
            offColor="#7D7B79"
            onColor="#7D7B79"
            onHandleColor="#ffffff"
            offHandleColor="#000000"
            uncheckedIcon={false}
            checkedIcon={false}
            height={14}
            width={40}
            handleDiameter={20}
        />
    );
}

export default Toggle;
