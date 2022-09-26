import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUser, editUser, initState, removeUser, setDefaultList} from "./store/slices/usersSlice";
import './App.css';

import Header from "./components/header/Header";
import Button from "./components/button/Button";
import UserCard from "./components/userCard/UserCard";
import SearchBar from "./components/searchBar/searchBar";

import userIcon from './assets/icons/add-user-icon.svg'

function App() {
    const dispatch = useDispatch();
    const usersList = useSelector(state => state.users.usersList);
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);

    useEffect(()=> {
        const savedUsers = JSON.parse(localStorage.getItem('localUsers'));
        if(savedUsers.length === 0) {
            dispatch(initState());
        } else {
            dispatch(setDefaultList(savedUsers));
        }
    }, [])

    useEffect(()=> {
        setUsers([...usersList]);
        localStorage.setItem('localUsers', JSON.stringify([...usersList]));
    }, [usersList])

    const renderCards = () => {
        return users.sort((a, b) => a.fullName.replace(" ", "").toLowerCase() > b.fullName.replace(" ", "").toLowerCase() ? 1 : -1).map((user, i) => {
            return <div key={i} className="card-divider"><UserCard userData={user} updateUserData={updateUserData} onDelete={() => deleteUser(user.id)}/></div>
        })
    }

    const onSearch = searchTerm => {
        if(!!searchTerm) {
            setUsers(usersList.filter(user => user.email.toLowerCase().includes(searchTerm.toLowerCase())));
        } else {
            setUsers([...usersList]);
        }
    }

    const addNewUser = data => {
        setShowAddUser(false);
        dispatch(addUser({
            id: data.fullName + Math.floor((Math.random() * 100)).toString(),
            fullName: data.fullName,
            email: data.email,
            isAdmin: data.isAdmin,
            honorific: data.honorific
        }));

    }

    const updateUserData = newData => {
        dispatch(editUser(newData));
    }

    const deleteUser = id => {
        dispatch(removeUser(id));
    }

    return (
        <div className="app-container">
            <Header></Header>
            <div className='app-content'>
                <div className='commands-row'>
                    <Button label="Add User" onClick={() => setShowAddUser(!showAddUser)} leftIcon={userIcon}></Button>
                    <SearchBar placeholder="Search..." onButtonClick={onSearch}></SearchBar>
                </div>
                {
                    showAddUser && <div className="card-divider"><UserCard userData={{}} updateUserData={addNewUser} addingUser onDelete={()=> setShowAddUser(false)}/></div>
                }
                {
                    renderCards()
                }
            </div>
        </div>
    );
}

export default App;
