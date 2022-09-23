import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return(
        <header className={styles.header}>
            <span className={styles.headerTitle}>
                User management
            </span>
        </header>
    )
}

export default Header;
