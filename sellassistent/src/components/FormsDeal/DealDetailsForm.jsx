import { ENDPOINTS } from "../../api/Index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";

const DealDetailsForm = (props) => {
    let user = useSelector((state) => state.authRedux);
    console.log(user);
    const statuses = [
        "To Contact",
        "Contact Made",
        "Meeting Arranged",
        "Needs Defined",
        "Proposal Made",
        "Negotiations Started",
        "Sealed",
        "Failed",
    ];
    const prioritys = ["High", "Medium", "Low"];
    const dealId = props.location.pathname.split("/").at(-1);
    let deals = useSelector((state) => state.dealsRedux).deals;
    let products = useSelector((state) => state.productsRedux).products;
    let clients = useSelector((state) => state.clientsRedux).clients;
    let companies = useSelector((state) => state.companiesRedux).companies;
    let interceptions = useSelector(
        (state) => state.interceptionsRedux
    ).interceptions;
    let showInterceptions = (deal) => {
        let inter = interceptions.map((interception) => {
            return interception.dealId === deal.id ? (
                <span key={`interception${interception.id}`}>
                    Closest Interception: {interception.date.split("T")[0]}{" "}
                    {interception.date.split("T")[1]}
                </span>
            ) : null;
        });
        let result = true;
        for (let index = 0; index < inter.length; index++) {
            if (inter[index] != null) {
                result = false;
            }
        }
        if (result == true) {
            return <span>Not Interception !</span>;
        }
        return inter;
    };
    let showProducts = (deal) => {
        let inter = products.map((product) => {
            return product.dealId === deal.id ? (
                <div>
                    <span key={`product${product.id}`}>
                        {product.name} {product.actualPrice}${"    "}
                        {product.description}
                        {"   "}
                    </span>
                    <br />
                </div>
            ) : null;
        });
        let result = true;
        for (let index = 0; index < inter.length; index++) {
            if (inter[index] != null) {
                result = false;
            }
        }
        if (result == true) {
            return <span className="pillText">No Products</span>;
        }
        return inter;
    };
    let showDealSizeOrZERO = (deal) => {
        let sum = 0;
        let inter = products.map((product) => {
            if (product.dealId === deal.id) {
                sum = sum + product.actualPrice;
            }
        });
        if (sum === 0) {
            return <span>0</span>;
        }
        return <span key={`size${deal.id}`}>{sum}</span>;
    };
    const [deal, setDeal] = useState();
    useEffect(() => {
        if (deals !== undefined) {
            setDeal(deals.filter((elem) => elem.id == dealId).at(0));
        }
    }, [deals]);

    return deals !== undefined && deal !== undefined ? (
        <div className="container">
            <h3>
                Deal <b>{deal.id}</b> Details
            </h3>
            <div className="container card">
                <div className="row g-3">
                    <div className="col-3">
                        {clients.map((client) => {
                            return client.id === deal.clientId ? (
                                <span key={`client${client.id}`}>
                                    Client: {client.firstName} {client.lastName}
                                </span>
                            ) : null;
                        })}
                    </div>
                    {/* Company name */}
                    <div className="col-3">
                        {clients.map((client) => {
                            return client.id === deal.clientId
                                ? companies.map((company) => {
                                      return company.id === client.companyId ? (
                                          <span key={`company${company.id}`}>
                                              Company: {company.name}
                                          </span>
                                      ) : null;
                                  })
                                : null;
                        })}
                    </div>
                    <div className="col-3">
                        <span> Status: {statuses.at(deal.status)}</span>
                    </div>
                    <div className="col-3">
                        <span>Priority: {prioritys.at(deal.priority)}</span>
                    </div>
                    <div className="col-10">
                        <span>{showInterceptions(deal)}</span>
                    </div>
                    <Link
                        className="col-2"
                        to={`/addInterception/${deal.id}`}
                        id={`intr${deal.id}`}
                    >
                        {" "}
                        <button className="btn btn-info ">
                            Add Interception
                        </button>
                    </Link>
                    <div className="col-10">
                        Products: {showProducts(deal)}
                        <hr />
                        Total: {showDealSizeOrZERO(deal)}$
                    </div>
                    <Link to={`/addProducts/${deal.id}`} className="col-2">
                        <button className="btn btn-info ">Add Product</button>
                    </Link>
                    <br />
                </div>
            </div>
        </div>
    ) : (
        "...Loading"
    );
};

export default DealDetailsForm;
