import React, { Fragment, useState ,useEffect} from "react";
import Layout from "./components/layout/Layout";
import LoginForm from "./components/Account/LoginForm";
import RegisterForm from "./components/Account/RegisterForm"
import { useSelector, useDispatch } from 'react-redux'

import "./App.css";
import "./modal.css";

const App = () => {
    const guest = useSelector(state=> state.authRedux)
    

    const [user, setUser] = useState({ name: "", email: "" });
    const Logout = () => {
        console.log("Logout");
    };

    const Login = (details) => {
        console.log(details);
    };

    const [modalShow, setModalShow] = useState(true);
    const [modalRegisterShow, setModalRegisterShow] = useState(false);

    useEffect(()=>{
        setUser({name: guest.user.name, email: `${guest.user.name}`})
        setModalShow("false")
        setModalRegisterShow("false")
    },[guest])

    return (
        <Fragment>
            {user.email === "" ? (
                <div>
                    <button
                        variant="primary"
                        className="d-none"
                        onClick={() => setModalShow(true)}
                    ></button>

                    <LoginForm
                        show={modalShow}
                        showRegister={()=> {
                            // setModalShow(false);
                            setModalRegisterShow(true);
                        }}
                        onHide={() => setModalShow(false)}
                    />
                    {/* <RegisterForm 
                        show={modalRegisterShow}
                        onHide={() => setModalRegisterShow(false)}
                    /> */}
                </div>
            ) : (
                ""
            )}
            <Layout userName={user} />
        </Fragment>
    );
};

export default App;
