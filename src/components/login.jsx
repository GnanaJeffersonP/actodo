import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Login(props) {
    const users = props.users

    const [eusername, seteusername] = useState("")
    const [epassword, setepassword] = useState("")
    const [ruser, setRuser] = useState(true)

    const navigate = useNavigate()

    function CheckUser() {
        let foundUser = false

        users.forEach(function(item) {
            if (
                item.username === eusername &&
                item.password === epassword
            ) {
                foundUser = true
            }
        })

        if (foundUser) {
            navigate('/actodo', {
                state: { username: eusername }
            })
        } else {
            setRuser(false)
        }
    }

    return (
        <div className="bg-black min-h-screen p-10">
            <div className="bg-white p-10 border rounded-md">
                <h1 className="text-3xl font-bold">Hey, Hi!</h1>

                {ruser
                    ? <p>I help you manage your activity</p>
                    : <p className="text-red-500">You want sign up first</p>
                }

                <div className="flex flex-col w-64">
                    <input
                        className="border border-black rounded-md px-2 py-1 mt-3"
                        type="text"
                        placeholder="Username"
                        value={eusername}
                        onChange={(evt) => seteusername(evt.target.value)}
                    />

                    <input
                        className="border border-black rounded-md px-2 py-1 mt-3"
                        type="password"
                        placeholder="Password"
                        value={epassword}
                        onChange={(evt) => setepassword(evt.target.value)}
                    />
                </div>

                <button
                    onClick={CheckUser}
                    className="bg-amber-500 font-bold rounded mt-3 px-4 py-2"
                >
                    Login
                </button>

                <p className="mt-3">
                    Don't have an account?{' '}
                    <Link className="text-blue-600 underline" to="/signup">
                        Signup
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login