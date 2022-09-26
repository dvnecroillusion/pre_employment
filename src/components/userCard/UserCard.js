import React, {useState} from 'react';
import styles from './userCard.module.css';

import Avatar from "../avatar/Avatar";
import Input from "../input/Input";
import CardButton from "../cardButton/CardButton";
import Dropdown from "../dropdown/Dropdown";
import Toggle from "../toggle/Toggle";

import checkIcon from '../../assets/icons/check.svg'
import editIcon from '../../assets/icons/edit-icon.svg'
import deleteIcon from '../../assets/icons/close-icon.svg'
import saveIcon from '../../assets/icons/save-icon.svg'
import {honorifics} from "../../constants/honorifics";

const UserCard = ({userData, updateUserData, onDelete, addingUser = null}) => {

    const [isEditing, setIsEditing] = useState(addingUser || false);
    const [fullName, setFullName] = useState(userData?.fullName || "");
    const [email, setEmail] = useState(userData?.email || "");
    const [honorific, setHonorific] = useState(userData?.honorific || honorifics[0]);
    const [isAdmin, setIsAdmin] = useState(userData?.isAdmin || false);

    const getAvatarLabel = () => {
        if (userData?.fullName) {
            let words = userData.fullName.split(" ");
            return words.map(word => word[0].toUpperCase());
        }
    }

    const onSave = () => {
        if (!!fullName) {
            updateUserData(Object.assign({}, userData, {fullName, honorific, isAdmin, email}));
            setIsEditing(false);
        }
    }

    return (
        <div className={styles.container}>
            <div className={!isEditing ? styles.avatarContainer : `${styles.avatarContainer} ${styles.noBorder}`}>
                <Avatar label={getAvatarLabel()}/>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.contentFirstRow}>
                    {
                        !isEditing
                            ? <span className={styles.text}>{userData.honorific + ' ' + userData.fullName}</span>
                            : <div className={styles.inputContainer}>
                                <Dropdown name="Honorifics" data={honorifics} onChange={value => setHonorific(value)}
                                          selectedValue={honorific}/>
                                <div style={{width: '10px'}}/>
                                <Input type="text" placeholder="Name" value={fullName} onChange={value => setFullName(value)}/>
                            </div>
                    }
                    {
                        !isEditing && userData.isAdmin && <span className={styles.adminText}>
                            <img src={checkIcon} className={styles.check}></img>
                            Admin
                        </span>
                    }
                    {
                        isEditing &&
                        <div className={styles.toggleContainer}>
                            <Toggle value={isAdmin} onChange={() => setIsAdmin(!isAdmin)}/>
                            <div style={{width: "5px"}} />
                            <span className={styles.adminText}>Admin</span>
                        </div>
                    }
                </div>
                <div>
                    {
                        !addingUser
                            ? <span className={styles.text}>{userData.email}</span>
                            : <Input type="text" placeholder="Email" value={email} onChange={value => setEmail(value)}/>
                    }

                </div>
                <div className={styles.contentLastRow}>
                    {
                        !isEditing
                            ? <CardButton label="delete" onClick={onDelete} icon={deleteIcon}/>
                            : <CardButton label="save" onClick={onSave} icon={saveIcon}/>
                    }
                    <div style={{width: "15px"}}></div>
                    {
                        !isEditing
                            ? <CardButton label="edit" onClick={() => setIsEditing(true)} icon={editIcon}/>
                            : <CardButton label="delete" onClick={onDelete} icon={deleteIcon}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default UserCard;
