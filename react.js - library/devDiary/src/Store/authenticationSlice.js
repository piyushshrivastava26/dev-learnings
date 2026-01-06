import { createSlice } from "@reduxjs/toolkit";


const authenticationSlice = createSlice ( {
    
    name : 'auth',

    initialState : {
        activeStatus : false, // user is not login
        userData : null // means no user data we are having to show
    },

    reducers : {
        login : (state, action) => { // action gives payload and login is an action
            state.activeStatus = true,
            state.userData = action.payload.userData
        },
        logout : (state, action) => {
            state.activeStatus = false,
            state.userData = null
        }
    }
} )

 
export const {login, logout} = authenticationSlice.actions


export default authenticationSlice.reducer