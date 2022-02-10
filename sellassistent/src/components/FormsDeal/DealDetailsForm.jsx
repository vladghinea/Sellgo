import { ENDPOINTS } from "../../api/Index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPersonalApproach } from "../../redux/ClientPersonalApproach/ClientPersonalApproachActions";
import { useHistory } from "react-router-dom";

import React, { useState, useEffect } from "react";

const DealDetailsForm = ({ location }) => {
    const history = useHistory();
    let user = useSelector((state) => state.authRedux);
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
    const dealId = location.pathname.split("/").at(-1);
    let deals = useSelector((state) => state.dealsRedux).deals;
    let products = useSelector((state) => state.productsRedux).products;
    let clients = useSelector((state) => state.clientsRedux).clients;
    let companies = useSelector((state) => state.companiesRedux).companies;
    let interceptions = useSelector(
        (state) => state.interceptionsRedux
    ).interceptions;
    let testpersonalApproach = undefined;
    let testprofessionalApproach = undefined;

    const [personalApproach, setPersonalApproach] = useState();

    const [professionalApproach, setProfessionalApproach] = useState();

    const [deal, setDeal] = useState();
    useEffect(async () => {
        if (deals !== undefined) {
            setDeal(deals.filter((elem) => elem.id == dealId).at(0));
        }
        if (deal !== undefined) {
            testpersonalApproach = await getPersonalApproach(deal.clientId);
            testprofessionalApproach = await getProfessionalApproach(
                deal.clientId
            );
        }
        if (
            testpersonalApproach !== undefined &&
            testprofessionalApproach !== 0
        ) {
            setPersonalApproach(testpersonalApproach.at(0));
        }
        if (
            testprofessionalApproach !== undefined &&
            testprofessionalApproach !== 0
        ) {
            setProfessionalApproach(testprofessionalApproach.at(0));
        }
    }, [deals, deal]);

    const getPersonalApproach = async (clientId) => {
        const res = await fetch(
            `${ENDPOINTS.BASE_URL}${ENDPOINTS.PERSONALAPPROACH}${clientId}`
        );
        const data = await res.json();

        return data;
    };
    const getProfessionalApproach = async (clientId) => {
        const res = await fetch(
            `${ENDPOINTS.BASE_URL}${ENDPOINTS.PROFESSIONALAPPROACH}${clientId}`
        );
        const data = await res.json();

        return data;
    };

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
            return <span>No Products</span>;
        }
        return inter;
    };
    let showDealSizeOrZERO = (deal) => {
        let sum = 0;
        products.map((product) => {
            if (product.dealId === deal.id) {
                sum = sum + product.actualPrice;
            }
        });
        if (sum === 0) {
            return <span>0</span>;
        }
        return <span key={`size${deal.id}`}>{sum}</span>;
    };
    const editPersonalApproach = async (value) => {
        await fetch(
            `${ENDPOINTS.BASE_URL}${ENDPOINTS.PERSONALAPPROACH}${value.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(value),
            }
        );
    };
    const editProfessionalApproach = async (value) => {
        await fetch(
            `${ENDPOINTS.BASE_URL}${ENDPOINTS.PROFESSIONALAPPROACH}${value.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(value),
            }
        );
    };
    const addPersonalApproach = async (value) => {
        await fetch(`${ENDPOINTS.BASE_URL}${ENDPOINTS.PERSONALAPPROACH}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(value),
        });
    };
    const addProfessionalApproach = async (value) => {
        await fetch(`${ENDPOINTS.BASE_URL}${ENDPOINTS.PROFESSIONALAPPROACH}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(value),
        });
    };

    const EditorPersonal = () => {
        const [value, setValue] = useState(personalApproach);

        const handleChange = (event) => {
            setValue({ ...value, details: event.target.value });
            console.log(value);
        };
        const updateEvenet = () => {
            editPersonalApproach(value);
        };
        return (
            <form className="row" onSubmit={updateEvenet}>
                <textarea
                    className="col-6"
                    type="text"
                    id="clientPersonalDetail"
                    name="textarea"
                    value={value.details}
                    onChange={handleChange}
                />
                <div className="col-6">
                    <button type="submit" className="btn btn-info">
                        Update Personal Approach
                    </button>
                </div>
            </form>
        );
    };
    const AddPersonal = () => {
        const [value, setValue] = useState({
            details: "",
            clientId: deal.clientId,
        });

        const handleChange = (event) => {
            setValue({ ...value, details: event.target.value });
            console.log(value);
        };
        const updateEvenet = () => {
            addPersonalApproach(value);
        };
        return (
            <form className="row" onSubmit={updateEvenet}>
                <textarea
                    className="col-6"
                    type="text"
                    id="details"
                    name="details"
                    placeholder="Write here Your Personal Approach For this client...."
                    value={value.details}
                    onChange={handleChange}
                />
                <div className="col-6">
                    <button type="submit" className="btn btn-info">
                        Add Personal Approach
                    </button>
                </div>
            </form>
        );
    };
    const EditorProfessional = () => {
        const [value, setValue] = useState(professionalApproach);

        const handleChange = (event) => {
            setValue({ ...value, details: event.target.value });
            console.log(value);
        };
        const updateEvenet = () => {
            editProfessionalApproach(value);
        };
        return (
            <form className="row" onSubmit={updateEvenet}>
                <textarea
                    className="col-6"
                    type="text"
                    id="clientProfessionalDetail"
                    name="textarea"
                    value={value.details}
                    onChange={handleChange}
                />
                <div className="col-6">
                    <button type="submit" className="btn btn-info">
                        Update Professional Approach
                    </button>
                </div>
            </form>
        );
    };

    const AddProfessional = () => {
        const [value, setValue] = useState({
            details: "",
            clientId: deal.clientId,
        });

        const handleChange = (event) => {
            setValue({ ...value, details: event.target.value });
            console.log(value);
        };
        const updateEvenet = () => {
            addProfessionalApproach(value);
        };
        return (
            <form className="row" onSubmit={updateEvenet}>
                <textarea
                    className="col-6"
                    type="text"
                    id="details"
                    name="details"
                    placeholder="Write here Your Professional Approach For this client...."
                    value={value.details}
                    onChange={handleChange}
                />
                <div className="col-6">
                    <button type="submit" className="btn btn-info">
                        Add Professional Approach
                    </button>
                </div>
            </form>
        );
    };

    return deals !== undefined && deal !== undefined ? (
        <div className="container">
            <h3>
                Deal <b>{deal.id}</b> Details
            </h3>
            <div className="container card">
                <div className="col-3">
                    <span> Status: {statuses.at(deal.status)}</span>
                </div>
                <div className="col-3">
                    <span>Priority: {prioritys.at(deal.priority)}</span>
                </div>
                <hr />

                <div className="col-10">
                    Products: {showProducts(deal)}
                    <br></br>
                    Total: {showDealSizeOrZERO(deal)}$
                </div>
                <Link to={`/addProducts/${deal.id}`} className="col-2">
                    <button className="btn btn-info ">Add Product</button>
                </Link>
                <hr />

                <div className="col-10">
                    <span>{showInterceptions(deal)}</span>
                </div>
                <Link
                    className="col-2"
                    to={`/addInterception/${deal.id}`}
                    id={`intr${deal.id}`}
                >
                    {" "}
                    <button className="btn btn-info ">Add Interception</button>
                </Link>
                <hr />

                {clients.map((client) => {
                    return client.id === deal.clientId ? (
                        <>
                            <span className="col-4">
                                Client: {client.firstName} {client.lastName}
                            </span>
                            <span className="col-6">
                                Email : {client.email}
                                {"  "}
                            </span>
                            {"  "}
                            <span className="col-6">
                                BirthDate :{" "}
                                {client.dateOfBirth.split("T").at(0)}
                                {"  "}
                            </span>
                            <span className="col-4">
                                Position : {client.position}
                                {"  "}
                            </span>{" "}
                            <span className="col-4">
                                PhoneNumber : {client.phoneNumber}
                                {"  "}
                            </span>{" "}
                            <span className="col-6">
                                Address : {client.address}
                                {"  "}
                            </span>{" "}
                        </>
                    ) : null;
                })}
                <hr />
                {/* Company name */}
                <div className="col-3">
                    {clients.map((client) => {
                        return client.id === deal.clientId
                            ? companies.map((company) => {
                                  return company.id === client.companyId ? (
                                      <>
                                          <span key={`company${company.id}`}>
                                              Company name: {company.name}
                                          </span>
                                          <br></br>
                                          <span key={`company${company.id}`}>
                                              Company email: {company.email}
                                          </span>
                                      </>
                                  ) : null;
                              })
                            : null;
                    })}
                </div>
                <hr />

                {/* PersonalForm */}
                <div className="row">
                    <span className="col-6">Personal Approach:</span>
                    <span className="col-6">Professional Approach:</span>
                    <div className="col-6">
                        {personalApproach === undefined ||
                        personalApproach.length === 0 ? (
                            <AddPersonal />
                        ) : (
                            <EditorPersonal />
                        )}
                    </div>{" "}
                    <div className="col-6">
                        {professionalApproach === undefined ||
                        professionalApproach.length === 0 ? (
                            <AddProfessional />
                        ) : (
                            <EditorProfessional />
                        )}
                    </div>
                </div>

                <br />
            </div>
        </div>
    ) : (
        "...Loading"
    );
};

export default DealDetailsForm;
