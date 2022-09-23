import { createSlice } from '@reduxjs/toolkit'
import defaultUsers from "../../constants/users.json";

const initialState = {
    users: defaultUsers.users,
}

export const usersSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users = [...state.users, action.payload];
        },
        editUser: (state, action) => {
            state.users = [...state.users, action.payload];
        },
    },
})

export const { addUser, editUser } = usersSlice.actions

export default usersSlice.reducer
