import React, { useContext, useState } from 'react'

import axios from "axios"
import { UserContext } from './UserContext';

const RegisterAndLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedInOrRegister, setisLoggedInOrRegister] = useState("login")
    const { setUsername: setLoggedInUsername, setId } = useContext(UserContext)
    const submitHandler = async (ev) => {
        ev.preventDefault();
        try {
            const url = isLoggedInOrRegister === "register" ? "/register" : "/login"
            const { data } = await axios.post(url, { username, password })
            setLoggedInUsername(username)
            setId(data.id)

        } catch (error) {
            console.log("front regisetr error:", error)
        }
    }
    return (
        <div className='bg-purple-50 h-screen flex items-center'>
            <form className='w-64 mx-auto' onSubmit={submitHandler}>
                <input type="text" placeholder='UserName' value={username} onChange={(e) => setUsername(e.target.value)} className='block w-full rounded-sm p-2 mb-2 outline-none border hover:border-purple-400 ' />
                <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className='block w-full rounded-sm p-2 mb-2 outline-none border hover:border-purple-400' />
                <button className='bg-purple-500 text-white block w-full rounded-sm p-2 mb-2'>{isLoggedInOrRegister === "register" ? "Register" : "Login"}</button>
                <div className='text-center mt-2'>
                    {isLoggedInOrRegister === "register" && (
                        <div>
                            Already a member?
                            <button onClick={() => setisLoggedInOrRegister("login")}> Login here</button>
                        </div>
                    )}
                    {isLoggedInOrRegister === "login" && (
                        <div>
                            Dont have an account?
                            <button onClick={() => setisLoggedInOrRegister("register")}> register here</button>
                        </div>
                    )}
                </div>
            </form>
        </div>
    )
}

export default RegisterAndLogin
