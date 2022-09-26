import React from 'react';
import styles from './dropdown.module.css';

const Dropdown = ({data = [], name = '', selectedValue = null, onChange = () => {}}) => {

    const renderData = () => {
        return data.map((el, i) => {
            return <option value={el} key={i}>{el}</option>
        })
    }

    return (
        <select name={name} className={styles.container} onChange={e => onChange(e.target.value)} value={selectedValue}>
            {renderData()}
        </select>
    )
}

export default Dropdown;
