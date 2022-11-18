import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddressDetails from "./AddressDetails";
import OtherInfo from "./OtherInfo";
import PersonalInfo from "./PersonalInfo";
import useAuthCalls from "../../hooks/useAuthCalls";
import { useSelector } from "react-redux";
import {toastErrorNotify, toastSuccessNotify} from "../../helpers/toastify";
import gif from "../../assets/spinner.gif";

const Form = () => {
  const navigate = useNavigate()
  const {currentUser, error, loading} = useSelector((state)=>state.authReducer);
  const {registerUser} = useAuthCalls();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    message: "",
  });

  const FormTitles = ["Personal Info", "Address Details", "Other Info"];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <AddressDetails formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };



  useEffect(() => {
    if (currentUser) {
      //navigate("/");
      toastSuccessNotify("Sign-in is performed succesfully");
    }
  }, [navigate, currentUser]);

  useEffect(() => {
    error && toastErrorNotify("Sign-up failed");
  }, [navigate, error]);
  
  


  return (
    <div className="wrapper">
      <section>
        <div className="inner">
          <div className="image-holder">
          <img src="https://picsum.photos/368/521?random=1" alt=""/>
            {/* <img src={`./form-wizard-${page+1}.jpg`} alt="" /> */}
          </div>
          <div className="form-content">
            <div className="form-header">
              <h3>REGISTRATION</h3>
              <div className="progressbar">
                <div
                  style={{
                    borderRadius:"5px",
                    width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
                  }}
                ></div>
              </div>
              <h2>{FormTitles[page]}</h2>
            </div>
            <div className="form-body">{PageDisplay()} </div>
            <div className="form-footer">
              <button
                disabled={page === 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
                className="btn form-buttons me-3"
              >
                Backward
              </button>
              <button
                onClick={() => {
                    if (page === FormTitles.length - 1) {
                      registerUser(formData);
                      navigate("/login");
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}
                className="btn form-buttons"
              >
                {page === FormTitles.length -1 ? loading ? (<img style={{width:"25px"}} src={gif} alt="" />): "Submit" : "Forward"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
