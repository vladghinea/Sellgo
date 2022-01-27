import React from "react";
import { Link } from "react-router-dom";

const DealForm = () => {
    return (
        <div className="container">
            <h3>add Deal</h3>
            <div className="container card">
                <form className="row g-3">
                    <div className="card-body col-6">
                        <div className="col-md-12">
                            <label htmlFor="status" className="form-label">
                                Status
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="status"
                                placeholder="meeting arranged"
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="dealsize" className="form-label">
                                Deal Size
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="dealsize"
                                placeholder="600"
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="meeting" className="form-label">
                                Date Next Meeting
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="meeting"
                                placeholder="134 Magheru St"
                            />
                        </div>
                    </div>
                    <div className="card-body col-6">
                        <div className="col-md-4">
                            <label htmlFor="product" className="form-label">
                                Product
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="product"
                                placeholder="insurance"
                            />
                        </div>

                        <div className="col-4">
                            <label htmlFor="price" className="form-label">
                                Price per unity
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                placeholder="100"
                            />
                        </div>

                        <div className="col-4">
                            <label htmlFor="quantity" className="form-label">
                                Quantity
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="quantity"
                                placeholder="1"
                            />
                        </div>
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

export default DealForm;
