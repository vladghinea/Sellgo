import React from 'react'

const Login = () => {
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
