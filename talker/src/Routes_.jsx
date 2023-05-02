import React, { useContext } from 'react'
import Chat from './Chat'
import RegisterAndLogin from './RegisterAndLogin'
import { UserContext } from './UserContext'

const Routes_ = () => {
    const { username, id } = useContext(UserContext)
    // console.log("username from Routes_:", username)
    if (username) {
        return <Chat/>
    }
    return (
        <div>
            <RegisterAndLogin />
        </div>
    )
}

export default Routes_
