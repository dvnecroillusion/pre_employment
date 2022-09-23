import React, {useEffect, useRef, useState} from 'react';
import styles from './searchBar.module.css'

import Button from "../button/Button";

import searchIcon from '../../assets/icons/search-icon.svg';

const defaultStyle = {
    borderRadius: "0 4px 4px 0",
    height: "41px",
}

const SearchBar = ({placeholder, onButtonClick, icon}) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [customButtonStyle, setCustomButtonStyle] = useState({});
    const ref = useRef();

    useEffect(() => {
        setCustomButtonStyle(Object.assign({}, defaultStyle, {height: `${ref?.current?.offsetHeight || 41}px`}))
    }, [])


    const onSearchPress = () => {
        onButtonClick(searchTerm);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onButtonClick(searchTerm);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.inputContainer} ref={ref}>
                <img src={searchIcon} className={styles.icon}></img>
                <input className={styles.input} type="text" value={searchTerm} placeholder={placeholder}
                       onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={e => handleKeyDown(e)}></input>
            </div>
            <Button label="search" onClick={onSearchPress} customStyle={customButtonStyle}></Button>
        </div>
    )
}

export default SearchBar;
