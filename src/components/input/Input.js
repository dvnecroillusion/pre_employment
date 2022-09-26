import React from "react";
import styles from './Input.module.css';

const Input = ({type = "text", placeholder = '', value, onChange = () => {}}) => {
    return (
        <input className={styles.container} placeholder={placeholder} type={type} value={value} onChange={e => onChange(e.target.value)}></input>
    )
}

export default Input;
