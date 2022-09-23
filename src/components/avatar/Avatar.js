import React from 'react';
import styles from './avatar.module.css';

const Avatar = ({label = ""}) => {
    return(
        <div className={styles.container}>
            <span className={styles.label}>
                {label}
            </span>
        </div>
    )
}

export default Avatar;
