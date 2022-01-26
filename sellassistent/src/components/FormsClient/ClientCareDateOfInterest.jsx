import React from 'react';

const ClientCareDateOfInterest = () => {
  return    <form className="row g-3">
                <div className="col-md-6">
                        <label htmlFor="clientPersonalTitle" className="form-label">Title</label>
                        <input type="text" className="form-control" id="clientPersonalTitle" placeholder="Title" />
                </div>
                <div className="col-md-6">
                <label htmlFor="clientCareDoI" className="form-label">Date</label>
                <input type="date" className="form-control" id="clientCareDoI" />
                </div>
               
                
                <div className="col-md-12">
                    <label htmlFor="clientPersonalDetail" className="form-label">Details</label>
                    <textarea type="text" className="form-control" id="clientPersonalDetail" rows="7" placeholder="Write here...." />
                </div>
               

                <br />
                <div className="col-12">
                <button type="submit" className="btn btn-primary">Save info</button>
                </div>
            </form>;
};

export default ClientCareDateOfInterest;
