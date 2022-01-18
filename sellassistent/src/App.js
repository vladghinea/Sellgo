import React, { Fragment, useState, useEffect } from "react";
import Layout from "./components/layout/Layout";
import LoginForm from "./components/Account/LoginForm";
import RegisterForm from "./components/Account/RegisterForm";
import { useSelector } from "react-redux";
import Home from "./components/layout/Home";

import "./App.css";
//import "./modal.css";

const App = () => {
    const guest = useSelector((state) => state.authRedux);

    const [user, setUser] = useState({ id: "", name: "", email: "" });

    const [modalShow, setModalShow] = useState(true);

    const [pageShow, setPageShow] = useState(<Home />);

    useEffect(() => {
        setUser({
            id: guest.user.id,
            name: guest.user.name,
            email: guest.user.name,
        });

        user.email != ""
            ? setPageShow(<Layout userName={user} />)
            : setPageShow(<Home />);
    }, [guest]);
    return (
        <Fragment>
            {pageShow}
            {/* {user.email === "" ? (
                <div>
                    <Home /> */}
            {/* <button
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
                     <RegisterForm 
                        show={modalRegisterShow}
                        onHide={() => setModalRegisterShow(false)}
                    /> */}
            {/* </div>
            ) : (
                <Layout userName={user} />
            )} */}
        </Fragment>
    );
};

export default App;
