import React, {useState} from 'react'
import Layout from './components/layout/Layout'
import LoginForm from './components/Account/LoginForm'



const App = () => {


    const [user, setUser] = useState({name:"", email:"user@name.com"});
    const [error, setError] = useState("")


    const Logout = () => {
        console.log("Logout")
    }

    const Login = (details) => {
        console.log(details)
    }

    return (
        <div>
            {(user.email != "") ? (<Layout />): (<LoginForm  Login={Login} error={error} />)}            
        </div>
    )
}

export default App
