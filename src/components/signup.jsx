import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Signup(props) {
    const users = props.users
    const setusers = props.setusers

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    const [message, setmessage] = useState("")

    const navigate = useNavigate()

    function handleSignup() {
        if (username === "" || password === "" || confirmpassword === "") {
            setmessage("Please fill all the fields")
        } else if (password !== confirmpassword) {
            setmessage("Passwords do not match")
        } else {
            const userExists = users.some(function(item) {
                return item.username === username
            })

            if (userExists) {
                setmessage("Username already exists")
            } else {
                setusers([...users, {
                    username: username,
                    password: password
                }])

                navigate('/')
            }
        }
    }

    return (
        <div className="bg-black min-h-screen p-10">
            <div className="bg-white p-10 border rounded-md">
                <h1 className="text-3xl font-bold">Hey, Hi!</h1>
                <p>I help you manage your activity</p>

                <div className="flex flex-col w-64">
                    <input
                        className="border border-black rounded-md px-2 py-1 mt-3"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(evt) => setusername(evt.target.value)}
                    />

                    <input
                        className="border border-black rounded-md px-2 py-1 mt-3"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(evt) => setpassword(evt.target.value)}
                    />

                    <input
                        className="border border-black rounded-md px-2 py-1 mt-3"
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmpassword}
                        onChange={(evt) => setconfirmpassword(evt.target.value)}
                    />
                </div>

                {message && (
                    <p className="text-red-500 mt-3">{message}</p>
                )}

                <button
                    onClick={handleSignup}
                    className="bg-amber-500 font-bold rounded mt-3 px-4 py-2"
                >
                    Signup
                </button>

                <p className="mt-3">
                    Have an account?{' '}
                    <Link className="text-blue-600 underline" to="/">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Signup