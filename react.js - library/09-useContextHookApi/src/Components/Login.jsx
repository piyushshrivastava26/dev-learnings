import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

// for transferring data

function Login() {

    const[username, setUsername] = useState('')
    const[passkey, setPasskey] =  useState('')

    const {setUser} = useContext(UserContext)

    const handleLoginOfUser = (e) => {
        e.preventDefault()
        setUser (username, passkey)
    }

  return (
    <>
        <div>  
            <h2>Login Page</h2>

            <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}

                placeholder='Enter Your username'
            />
            {"    "}
            <input 
                type="text" 
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
                placeholder='Enter your passkey'
            />

            <br /><br />
            <button
                onClick={handleLoginOfUser}
            >
                Login
            </button>
            <br />
            <br />
        </div>
    </>
  )
}

export default Login
