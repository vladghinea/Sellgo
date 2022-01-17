import axios from "axios";
import  { REGISTER_SUCCESS } from './RegisterTypes.js'

const registerState = {
  isLoggedIn: false,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",    
  },
};

