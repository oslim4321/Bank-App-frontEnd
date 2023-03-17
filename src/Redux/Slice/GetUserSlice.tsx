import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../Store'
// import { RootState } from '../Store'
// import type { RootState } from '../../app/store'

// Define a type for the slice state
interface GetUserSlice {
    isFetching: boolean
    User: any
    error: string
}

// Define the initial state using that type
const initialState: GetUserSlice = {
    isFetching: false,
    User: {},
    error: ''
}

export const UserData = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        fetchingStart: (state) => {
            state.isFetching = true;
        },
        getUser: (state, action: PayloadAction) => {
            state.isFetching = false
            state.User = action.payload
            state.error = ''
        },
        errorStart: (state, action) => {
            state.error = action.payload;
            state.isFetching = false
            state.User = ''
        },
        clearUser: (state) => {
            state.User = {}
        }
    },
})

export const { fetchingStart, getUser, errorStart, clearUser } = UserData.actions;

// Other code such as selectors can use the imported `RootState` type
export const UserSelect = (state: RootState) => state.user.User;
export const UserSelectErr = (state: RootState) => state.user.error;
export default UserData.reducer