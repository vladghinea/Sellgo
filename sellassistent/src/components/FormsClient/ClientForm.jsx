import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Link } from "react-router-dom";

const ClientForm = () => {
    return (
        <div className="container">
            <h3>add Client</h3>
            <div className="container card">
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="clientFirstName" className="form-label">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="clientFirstName"
                            placeholder="John"
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="clientLastName" className="form-label">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="clientLastName"
                            placeholder="Doe"
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="clientCompany" className="form-label">
                            Company
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="clientCompany"
                            placeholder="ExonMobile"
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="clientPosition" className="form-label">
                            Position
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="clientPosition"
                            placeholder="Marketing Manager"
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="clientEmail" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="clientEmail"
                            placeholder="john.doe@exemple.com"
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="clientPhone" className="form-label">
                            Phone
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            id="clientPhone"
                            placeholder="+40 0700 261 291"
                        />
                    </div>
                    <div className="col-3">
                        <label htmlFor="clientCity" className="form-label">
                            City
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="clientCity"
                            placeholder="Bucharest"
                        />
                    </div>
                    <div className="col-9">
                        <label
                            htmlFor="clientAddressStreet"
                            className="form-label"
                        >
                            Street
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="clientAddressStreet"
                            placeholder="134 Magheru St"
                        />
                    </div>
                    <div className="col-12">
                        <label
                            htmlFor="clientAddressNote"
                            className="form-label"
                        >
                            Address Note
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="clientAddressNote"
                            placeholder="Apartment, studio, or floor"
                        />
                    </div>
                    <div className="col-md-4">
                        <label
                            htmlFor="clientGeolocation"
                            className="form-label"
                        >
                            Geolocation
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="clientGeolocation"
                            placeholder="44.445463,26.097701"
                        />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="clientGender" className="form-label">
                            Gender
                        </label>
                        <select id="clientGender" className="form-select">
                            <option selected>Choose...</option>
                            <option> female</option>
                            <option> male</option>
                            <option> unknown</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="clientDoB" className="form-label">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="clientDoB"
                        />
                    </div>
                    <div className="col-6">
                        <h3>Personal</h3>
                        <Link to="/clientpersonalform">
                            <button className="btn btn-info ">
                                Add Approach
                            </button>
                        </Link>
                    </div>
                    <div className="col-6">
                        <h3>Profesional</h3>
                        <Link to="/clientprofessionalform">
                            <button className="btn btn-info  btn-block">
                                Add Approach
                            </button>
                        </Link>
                    </div>

                    <br />
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Save all info
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ClientForm;
