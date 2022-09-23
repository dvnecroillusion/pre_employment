import React from 'react';
import styles from './button.module.css'

const Button = ({label = '', onClick = () => {}, leftIcon = null, customStyle = {}}) => {
    return (
        <button className={styles.container} onClick={onClick} style={customStyle}>
            {
                leftIcon &&
                <img src={leftIcon} className={styles.icon} alt='add'></img>
            }
            {
                label &&
                <span className={styles.label}>{label}</span>
            }
        </button>
    )
}

export default Button;
