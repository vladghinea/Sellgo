import React from 'react';

const CompanyForm = () => {
  return    <form className="row g-3">
                 <div className="col-md-6">
                    <label htmlFor="companyName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="companyName" placeholder="AiG S.A." />
                </div>
                <div className="col-md-6">
                    <label htmlFor="companyCUI" className="form-label">CUI</label>
                    <input type="text" className="form-control" id="companyCUI" placeholder="742105" />
                </div>
                <div className="col-6">
                    <label htmlFor="clientCompany" className="form-label">Employees</label>
                    <input type="text" className="form-control" id="clientCompany" placeholder="employ list" />
                </div>
                <div className="col-6">
                    <label htmlFor="companyDomain" className="form-label">Domain</label>
                    <input type="text" className="form-control" id="companyDomain" placeholder="insurance" />
                </div>
                <div className="col-6">
                    <label htmlFor="companyEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="companyEmail" placeholder="contact@exemple.com" />
                </div>
                <div className="col-6">
                    <label htmlFor="companyPhone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="companyPhone" placeholder="+40 0700 261 291" />
                </div>
                <div className="col-3">
                    <label htmlFor="clientCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="clientCity" placeholder="Bucharest" />
                </div>
                <div className="col-9">
                    <label htmlFor="clientAddressStreet" className="form-label">Street</label>
                    <input type="text" className="form-control" id="clientAddressStreet" placeholder="134 Magheru St" />
                </div>
                <div className="col-9">
                    <label htmlFor="clientAddressNote" className="form-label">Address Note</label>
                    <input type="text" className="form-control" id="clientAddressNote" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-md-3">
                    <label htmlFor="clientGeolocation" className="form-label">Geolocation</label>
                    <input type="text" className="form-control" id="clientGeolocation" placeholder="44.445463,26.097701" />
                </div>            
          
               
                <br />
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Save all info</button>
                </div>   
            </form>;
};

export default CompanyForm;
