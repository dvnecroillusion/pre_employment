import {useState} from "react";
import {useSelector} from "react-redux";
import './App.css';

import Header from "./components/header/Header";
import Button from "./components/button/Button";
import UserCard from "./components/userCard/UserCard";
import SearchBar from "./components/searchBar/searchBar";

import userIcon from './assets/icons/add-user-icon.svg'

function App() {
    const storedUsers = useSelector(state => state.users.users);
    const [users, setUsers] = useState([...storedUsers]);

    const renderCards = () => {
        return users.sort((a, b) => a.fullName > b.fullName ? 1 : -1).map((user, i) => {
            return <div key={i} className="card-divider"><UserCard userData={user} updateUserData={updateUserData}/></div>
        })
    }

    const onSearch = searchTerm => {
        if(!!searchTerm) {
            setUsers(storedUsers.filter(user => user.email.toLowerCase().includes(searchTerm.toLowerCase())));
        } else {
            setUsers([...storedUsers])
        }
    }

    const updateUserData = newData => {
        console.log("updated", newData)
    }

    return (
        <div className="app-container">
            <Header></Header>
            <div className='app-content'>
                <div className='commands-row'>
                    <Button label="Add User" onClick={() => alert('TODO')} leftIcon={userIcon}></Button>
                    <SearchBar placeholder="Search..." onButtonClick={onSearch}></SearchBar>
                </div>
                {
                    renderCards()
                }
            </div>
        </div>
    );
}

export default App;
