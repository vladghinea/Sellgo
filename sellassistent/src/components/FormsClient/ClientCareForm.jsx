import React from 'react';

const ClientCareForm = () => {
  return    <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="clientFirstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="clientFirstName" placeholder="unknown" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="clientLastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="clientLastName" placeholder="unknown" />
                </div>
               
                
                <div className="col-md-4">
                    <label htmlFor="clientGender" className="form-label">Gender</label>
                <select id="clientGender" className="form-select">
                <option selected>Choose...</option>
                <option> Daughter</option>
                <option> Son</option>
                <option>LivePartner</option>
                <option> Dog</option>
                <option> Cat</option>
                <option>Aquarium</option>
                </select>
            </div>
            <div className="col-md-6">
                    <label htmlFor="clientPersonalDetail" className="form-label">Details</label>
                    <textarea type="text" className="form-control" id="clientPersonalDetail" rows="7" placeholder="Write here...." />
                </div>
            <div className="col-md-4">
                <label htmlFor="clientDoB" className="form-label">Date of Birth</label>
                <input type="date" className="form-control" id="clientDoB" />
            </div>
            <div className="col-6">
                <h3>Date of interest</h3>
                <button className='btn btn-info'>Add Date</button>
            </div>
           
           
            <br />
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Save all info</button>
            </div>
        </form>;
};

export default ClientCareForm;
