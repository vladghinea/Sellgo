import { useSelector } from "react-redux";
import React from "react";
import "./dealBoard.css";

const DealBoard = () => {
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
    const prioritys = ["Low", "Medium", "High"];
    let deals = useSelector((state) => state.dealsRedux).deals;
    let products = useSelector((state) => state.productsRedux).products;
    let clients = useSelector((state) => state.clientsRedux).clients;
    let companies = useSelector((state) => state.companiesRedux).companies;
    let interceptions = useSelector(
        (state) => state.interceptionsRedux
    ).interceptions;
    let myData = undefined;
    if (deals !== undefined) {
        myData = [].concat(deals).sort((a, b) => b.priority - a.priority); //sortare dupa prioritate
    }
    // console.log("data");
    // console.log(myData);
    // console.log("interceptions");
    // console.log(interceptions);
    // console.log("companies");
    // console.log(companies);
    // console.log("products");
    // console.log(products);
    // console.log("deals");
    // console.log(deals);
    // console.log("Clients");
    // console.log(clients);

    if (myData !== undefined) {
        return myData.map((deal) => (
            <div className="container card pillcard">
                <div className="row">
                    <div className="col pill pillClient">
                        {clients.map((client) => {
                            return client.id === deal.clientId ? (
                                <div
                                    className="pillText"
                                    key={`client${client.id}`}
                                >
                                    {client.firstName} {client.lastName}
                                </div>
                            ) : null;
                        })}
                    </div>
                    <div className="col pill pillCompany">
                        {clients.map((client) => {
                            return client.id === deal.clientId
                                ? companies.map((company) => {
                                      return company.id === client.companyId ? (
                                          <div
                                              className="pillText"
                                              key={`company${company.id}`}
                                          >
                                              {company.name}
                                          </div>
                                      ) : null;
                                  })
                                : null;
                        })}
                    </div>
                    <div className="col pill pillDealStatus">
                        <div className="pillText">
                            {statuses.at(deal.status)}
                        </div>
                    </div>
                    <div className="col pill pillInterception">
                        {interceptions.map((interception) => {
                            return interception.dealId === deal.id ? (
                                <div
                                    className="pillText"
                                    key={`interception${interception.id}`}
                                >
                                    {interception.date.split("T")[0]}{" "}
                                    {interception.date.split("T")[1]}
                                </div>
                            ) : null;
                        })}
                    </div>
                    <div className="col pill pillPriority">
                        <div
                            className={`pillText colorpriority${deal.priority}`}
                        >
                            {prioritys.at(deal.priority)}
                        </div>
                    </div>
                    <div className="col pill PillDealSize">
                        {products.map((product) => {
                            return product.dealId === deal.id ? (
                                <div
                                    className="pillText"
                                    key={`size${product.id}`}
                                    minPrice={product.minimPrice}
                                    maxPrice={product.actualPrice}
                                >
                                    {product.actualPrice}
                                </div>
                            ) : null;
                        })}
                    </div>
                    <div className="col pill pillProduct">
                        {products.map((product) => {
                            return product.dealId === deal.id ? (
                                <div
                                    className="pillText"
                                    key={`product${product.id}`}
                                >
                                    {product.name}
                                </div>
                            ) : null;
                        })}
                    </div>
                </div>
            </div>
        ));
    } else {
        return "Loading";
    }
};

export default DealBoard;
