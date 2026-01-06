import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

// for providing data


function Profile() {

    const {user} = useContext(UserContext)

    if (!user) {
        return <div> Warn : Enter Your Credentials</div>
    } else {
        return <div> welcome to my page, {user.username} </div>
        
    }
}

export default Profile
