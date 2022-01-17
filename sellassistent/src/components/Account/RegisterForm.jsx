import React, { useState } from 'react'
import { useHistory } from "react-router";
import {  Modal } from 'react-bootstrap'
import { connect } from "react-redux";
import {RegisterAuthAction} from '../../redux/Authentication/AuthActions'

const RegisterForm = (props) => {

    const { user, register } = props;
    const [userState, setUserstate] = useState({});
    const history = useHistory();
    const [errorHandler, setErrorHandler] = useState({
      hasError: false,
      message: "",
    });

    return (
      <>
      <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Register Form
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="container">
              <div className="row">
                  <div className="col-md-6 offset-md-3">
                      <div className="signup-form">
                          <form action="" className="mt-5 border p-4 bg-light shadow"
                            onSubmit={(event) => {
                            event.preventDefault();
                            register(userState, history, setErrorHandler);
                            }}
                          >
                              <h4 className="mb-5 text-secondary">Create Your Account</h4>
                              <div className="row">
                                  <div className="mb-3 col-md-6">
                                      <label>First Name<span className="text-danger">*</span></label>
                                      <input type="text" name="firstName" className="form-control" placeholder="Enter First Name" 
                                          onChange={(event) => {
                                          const firstName = event.target.value;                                          
                                          setUserstate({ ...userState, ...{ firstName } });
                                          console.log(userState)
                                        }}                                         
                                      />
                                  </div>
          
                                  <div className="mb-3 col-md-6">
                                      <label>Last Name<span className="text-danger">*</span></label>
                                      <input type="text" name="lastName" className="form-control" placeholder="Enter Last Name"
                                        onChange={(event) => {
                                          const lastName = event.target.value;
                                          setUserstate({ ...userState, ...{ lastName } });
                                        }}
                                      />
                                  </div>

                                  <div className="mb-3 col-md-12">
                                      <label>Email<span className="text-danger">*</span></label>
                                      <input type="email" name="email" className="form-control" placeholder="Enter Email" 
                                        onChange={(event) => {
                                          const email = event.target.value;
                                          setUserstate({ ...userState, ...{ email } });
                                          console.log(userState)
                                        }}
                                      />
                                  </div>    
                                  <div className="mb-3 col-md-12">
                                      <label>Password<span className="text-danger">*</span></label>
                                      <input type="password" name="password" className="form-control" placeholder="Enter Password" 
                                            onChange={(event) => {
                                              const password = event.target.value;
                                              setUserstate({ ...userState, ...{ password } });
                                            }}
                                      />
                                  </div>
                                  <div className="mb-3 col-md-12">
                                      <label>Confirm Password<span className="text-danger">*</span></label>
                                      <input type="password" name="confirmPassword" className="form-control" placeholder="Confirm Password" 
                                        onChange={(event) => {
                                          const confirmPassword = event.target.value;
                                          setUserstate({ ...userState, ...{ confirmPassword, companyId: 1 } });
                                          console.log(userState)
                                        }}
                                      />
                                  </div>
                                  <div className="col-md-12">
                                    <button className="btn btn-primary float-end">Signup Now</button>
                                  </div>
                              </div>
                          </form>
                          <p className="text-center mt-3 text-secondary">If you have account, Please <a href="#">Login Now</a></p>
                      </div>
                  </div>

              
              </div>
              
          </div>

          </Modal.Body>
          <Modal.Footer>
            <button onClick={props.onHide}>Close</button>
          </Modal.Footer>
      </Modal>
    </>     
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.authRedux,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: (userState, history, setErrorHandler) => dispatch(RegisterAuthAction(userState, history, setErrorHandler)),    
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
