import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from './authenticationSlice'
import React from 'react'

const store = configureStore( {
    reducer : {
        auth : authenticationSlice
    }
} )


export default store