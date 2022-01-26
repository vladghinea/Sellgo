import React from 'react';

const ClientPersonalForm = () => {
  return <div>
           <h3>Client Personal</h3> 
            <form className="row g-3">
                <div className="col-md-6">
                     <div className="col-md-12">
                        <label htmlFor="clientPersonalTitle" className="form-label">Title</label>
                        <input type="text" className="form-control" id="clientPersonalTitle" placeholder="Title" />
                    </div>

                    <div className="col-md-12 mt-5">
                        <h3 className='ml-5'>Cares</h3> 
                        <button className='btn btn-info'>Add Care</button>
                    </div>

                    <div className="col-12 mt-5 pt-5">
                        <button type="submit" className="btn btn-primary">Save info</button>
                    </div>
                
                </div>

                <div className="col-md-6">
                    <label htmlFor="clientPersonalDetail" className="form-label">Details</label>
                    <textarea type="text" className="form-control" id="clientPersonalDetail" rows="23" placeholder="Write here...." />
                </div> 
            </form>
        </div>;
};

export default ClientPersonalForm;
