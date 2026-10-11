import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react'

import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import TodoContainer from './components/TodoContainer.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'

function Actodo() {
    const location = useLocation()
    const username = location.state?.username || "User"

    return (
        <div className="bg-black min-h-screen p-16">
            <div className="bg-white p-10 rounded-2xl">
                <Header />

                <h2 className="text-xl font-bold my-4">
                    Hello, {username}!
                </h2>

                <div className="flex justify-between gap-7 flex-wrap">
                    <Card bgColor="lightblue" title="23" subtitle="Chennai" />
                    <Card bgColor="lightgreen" title="20 December" subtitle="14:03:23" />
                    <Card bgColor="lightyellow" title="Created Using" subtitle="React" />
                </div>

                <TodoContainer />
            </div>
        </div>
    )
}

function App() {
    const [users, setusers] = useState([
        { username: "jeff", password: "123" }
    ])

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Login users={users} />}
                />

                <Route
                    path="/signup"
                    element={
                        <Signup users={users} setusers={setusers} />
                    }
                />

                <Route path="/actodo" element={<Actodo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App