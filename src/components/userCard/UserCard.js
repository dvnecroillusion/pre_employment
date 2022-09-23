import React, {useState} from 'react';
import styles from './userCard.module.css';

import Avatar from "../avatar/Avatar";
import CardButton from "../cardButton/CardButton";

import checkIcon from '../../assets/icons/check.svg'
import editIcon from '../../assets/icons/edit-icon.svg'
import deleteIcon from '../../assets/icons/close-icon.svg'
import saveIcon from '../../assets/icons/save-icon.svg'

const UserCard = ({userData, updateUserData}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [fullName, setFullName] = useState("");

    const getAvatarLabel = () => {
        if (userData?.fullName) {
            let words = userData.fullName.split(" ");
            return words.map(word => word[0].toUpperCase());
        }
    }

    const onSave = () => {
        if (!!fullName) {
            updateUserData(Object.assign({}, userData, {fullName}));
            setIsEditing(false);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.avatarContainer}>
                <Avatar label={getAvatarLabel()}/>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.contentFirstRow}>
                    {
                        !isEditing
                            ? <span className={styles.text}>{userData.honorific + ' ' + userData.fullName}</span>
                            : <input type="text" value={fullName} onChange={e => setFullName(e.target.value)}></input>
                    }
                    {
                        userData.isAdmin && <span className={styles.adminText}>
                            <img src={checkIcon} className={styles.check}></img>
                            Admin
                        </span>
                    }
                </div>
                <div>
                    <span className={styles.text}>{userData.email}</span>
                </div>
                <div className={styles.contentLastRow}>
                    {
                        !isEditing
                            ? <CardButton label="delete" onClick={() => alert("DELETE")} icon={deleteIcon}/>
                            : <CardButton label="save" onClick={onSave} icon={saveIcon}/>
                    }
                    <div style={{width: "15px"}}></div>
                    <CardButton label="edit" onClick={() => setIsEditing(true)} icon={editIcon}/>
                </div>
            </div>
        </div>
    )
}

export default UserCard;
