import React, { useEffect } from "react";

import "./layout.css";

import Sidebar from "../sidebar/Sidebar";
import Topnav from "../topnav/Topnav";
import Routes from "../Routes";

import { BrowserRouter, Route } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchDeals } from "../../redux/Deals/DealActions";
import ThemeAction from "../../redux/Theme/ThemeActions";

const Layout = ({ userName, fetchDeals }) => {
    const user = useSelector((state) => state.authRedux);

    const themeReducer = useSelector((state) => state.themeRedux);
    const dispatch = useDispatch();
    useEffect(() => {
        const themeClass = localStorage.getItem(
            "themeMode",
            "theme-mode-light"
        );
        const colorClass = localStorage.getItem(
            "colorMode",
            "theme-mode-light"
        );

        dispatch(ThemeAction.setMode(themeClass));
        dispatch(ThemeAction.setColor(colorClass));
        console.log(1);
        fetchDeals(user.user.id);
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Route
                render={(props) => (
                    <div
                        className={`layout ${themeReducer.mode}  ${themeReducer.color}`}
                    >
                        <Sidebar {...props} />
                        <div className="layout__content">
                            <Topnav userName={userName} />
                            <div className="layout__content-main">
                                <Routes />
                            </div>
                        </div>
                    </div>
                )}
            />
        </BrowserRouter>
    );
};

const mapStateToProps = (state) => {
    return {
        deals: state.dealsRedux,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDeals: (userId) => dispatch(fetchDeals(userId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
