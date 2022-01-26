import React from 'react';

const ProductForm = () => {
  return    <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="productName" className="form-label">Product-Name</label>
                    <input type="text" className="form-control" id="productName" placeholder="insurance..." />
                </div>
                <div className="col-md-6">
                    <label htmlFor="productDescription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="productDescription" placeholder="Details...." />
                </div>
                <div className="col-6">
                    <label htmlFor="productActualPrice" className="form-label">Actual Price</label>
                    <input type="number" className="form-control" id="productActualPrice" placeholder="100" />
                </div>
                <div className="col-6">
                    <label htmlFor="productMinimPrice" className="form-label">Minim Price</label>
                    <input type="number" className="form-control" id="productMinimPrice" placeholder="50" />
                </div>
                <div className="col-6">
                    <label htmlFor="productSoldPrice" className="form-label">Sold Price</label>
                    <input type="number" className="form-control" id="productSoldPrice" placeholder="50" />
                </div>
                <div className="col-6">
                    <label htmlFor="productGuarantees" className="form-label">Guarantees</label>
                    <input type="text" className="form-control" id="productGuarantees" placeholder="Guarantees...." />
                </div>
                <div className="col-6">
                    <label htmlFor="productBenefit" className="form-label">Benefits</label>
                    <input type="text" className="form-control" id="productBenefit" placeholder="Benefits..." />
                </div>
                <div className="col-3">
                    <label htmlFor="productUpSell" className="form-label">UpSell</label>
                    <input type="text" className="form-control" id="productUpsell" placeholder="Bucharest" />
                </div>
                <div className="col-9">
                    <label htmlFor="productCrossSell" className="form-label">CrossSell</label>
                    <input type="text" className="form-control" id="productCrossSell" placeholder="CrossSell..." />
                </div>
                <div className="col-9">
                    <label htmlFor="productsBundlingSell" className="form-label">BundlingSell</label>
                    <input type="text" className="form-control" id="productsBundlingSell" placeholder="productsBundlingSell with ....." />
                </div>
                            


                <br />
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Save all info</button>
                </div>   
            </form>;
};

export default ProductForm;
