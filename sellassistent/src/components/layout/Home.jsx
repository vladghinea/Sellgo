import React, { useState, useEffect } from 'react'
import "./Home.css"// 
import RegisterForm from '../Account/RegisterForm'
import LoginForm from "../Account/LoginForm";
import Layout from "./Layout"

import { useSelector,  } from 'react-redux'


const Home = () => {
    

    const guest = useSelector(state=> state.authRedux)
    console.log(guest)

    const [user, setUser] = useState({ name: "", email: "" });
   

    const [modalLogin, setModalLogin] = useState(false);
    const [modalRegister, setModalRegister] = useState(false);

    useEffect(()=>{
        setUser({name: guest.user.name, email: `${guest.user.name}`})       
    },[guest])
    
    
    return (
       <>
           {guest.user.id === "" ? (
            <>
               
                    <div className="h-100 text-center text-white bg-dark">
            
                        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                            <header className="mb-auto">
                                <div>
                                <h3 className="float-md-start mb-0">Sellgo.</h3>
                                <nav className="nav nav-masthead justify-content-center float-md-end">
                                    <a className="nav-link active" aria-current="page" href="#" onClick={()=> setModalLogin(true)}>Login</a>
                                    <a className="nav-link active"  aria-current="page" href="#" onClick={()=> setModalRegister(true)}>Register</a>
                                    <a className="nav-link" href="#">About</a>
                                </nav>
                                </div>
                            </header>
                            
                            <main className="px-3">
                                <h1>Sellgo.</h1>
                                <p className="lead">Sellgo is Helping Sellers to create relationships and interact with their potential customers.<br/> A grate platform that will help you manage your workflow.                       </p>
                                <p className="lead">
                                <a href="#" className="signInBtn btn btn-lg fw-bold " onClick={()=> setModalLogin(true)} >engage</a>
                                </p>
                            </main>
                            
                            <footer className="mt-auto text-white-50">
                                <p>Sellgo was created in 2022, by <a href="#" className="text-white">WhiteBeltRookieDojo</a>.</p>
                            </footer>
                        </div>         
                    </div>
                

                <LoginForm 
                    show={modalLogin}
                    onHide={() => setModalLogin(false) }
                />
                <RegisterForm 
                    show={modalRegister}
                    onHide={() => setModalRegister(false)}
                />
            </>
            ) : (
                <Layout userName={user} />)}
       </>
    )
}

export default Home
