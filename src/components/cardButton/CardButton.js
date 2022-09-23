import React from 'react';
import styles from './cardButton.module.css';

const CardButton = ({label = '', icon = null, onClick = () => {}}) => {
    return (
        <div className={styles.container} onClick={onClick}>
            <span className={styles.text}>
                {label.toUpperCase()}
            </span>
            {
                icon && <img src={icon} className={styles.icon}></img>
            }
        </div>
    )
}

export default CardButton;
