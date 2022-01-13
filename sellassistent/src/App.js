import React, { Fragment, useState } from "react";
import Layout from "./components/layout/Layout";
import LoginForm from "./components/Account/LoginForm";

import Modal from "react-modal";
import "./App.css";
import "./modal.css";

const App = () => {
    const [user, setUser] = useState({ name: "Vlad", email: "Vlad@gmail.com" });
    const [error, setError] = useState("");

    const Logout = () => {
        console.log("Logout");
    };

    const Login = (details) => {
        console.log(details);
    };

    const [modalShow, setModalShow] = useState(true);

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
                        onHide={() => setModalShow(false)}
                    />
                </div>
            ) : (
                ""
            )}
            <Layout userName={user} />
        </Fragment>
    );
};

export default App;
