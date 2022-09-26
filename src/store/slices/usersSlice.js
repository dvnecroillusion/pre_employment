import {createSlice} from '@reduxjs/toolkit'
import defaultUsers from "../../constants/users.json";

const initialState = {
    usersList: [...defaultUsers.users],
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        initState: (state) => {
            state.usersList = [...defaultUsers.users];
        },
        setDefaultList: (state, action) => {
          state.usersList = action.payload;
        },
        addUser: (state, action) => {
            state.usersList.push(action.payload);
        },
        editUser: (state, action) => {
            state.usersList = state.usersList.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload
                } else {
                    return user;
                }
            });
        },
        removeUser: (state, action) => {
            state.usersList = state.usersList.filter(user => {
                return user.id !== action.payload;
            });
        },
    },
})

export const {addUser, editUser, removeUser, initState, setDefaultList} = usersSlice.actions

export default usersSlice.reducer
