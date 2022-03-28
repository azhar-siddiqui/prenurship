import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from 'react-date-picker';
import "../../src/App.css";

const Login = () => {
  const [date, setdate] = useState(null);
  return (
    <>
      <div className="main-container">
        <h1 className="text-center heading mb-3 mt-5">
          Welcome to the world of talents!
        </h1>

        <section className="main-section pe-4 pb-4">
          <div className="registeration-section mt-5 ms-5 w-25">
            <div className="logo-section">
              <div className="logo-circle rounded-circle p-2">
                <img
                  src={require("../assets/images/image 3.svg").default}
                  alt=""
                  className="logo-img rounded-circle"
                />
              </div>
            </div>
            <p className="mb-0 ms-3 text-white fs-3">Preneurship</p>
          </div>

          <div className="form-section">
            <div className="image-section">
              <img
                src={require("../assets/images/rafiki.svg").default}
                alt=""
                className="form-image-section"
              />
            </div>

            <form action="" className="bg-white p-4">
              <h5 className="text-center pt-5 pb-3">Regitration</h5>
              <div className="input-name">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-100 py-2 px-5"
                />
                <i className="bi bi-person text-muted"></i>
              </div>
              <div className="date-picker mt-5">
                {/* <DatePicker
                  selected={date}
                  onChange={(e) => setdate(e)}
                  placeholderText="Date of Birth"
                  className="w-100 rounded-pill py-2 px-5"
                /> */}
                
                
                {/* <i className="bi bi-calendar text-muted"></i> */}
              </div>

              <div className="input-name mt-5">
                <input
                  type="text"
                  placeholder="Country/City"
                  className="w-100 py-2 px-5"
                />
                <i
                  className="fa fa-globe text-muted"
                  aria-hidden="true"
                ></i>
              </div>

              <div className="btn-next d-flex justify-content-center">
                <button className="btn bg-primary rounded-pill px-5 mt-4">
                  Next
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
