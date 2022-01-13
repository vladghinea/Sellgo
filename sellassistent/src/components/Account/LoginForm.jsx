import React, { useState } from 'react'

const Login = ({Login, error}) => {
    const [details, setDetails] = useState({email: "", password: "" });
    return (
        <form>
            <div className='form-inner'>
                <h2>Login</h2>
                {/*Error*/}
                <div className='form-group'>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="name" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input type="submit" value="LOGIN" />
            </div>
        </form>
    )
}

export default Login
 