import React, { useState } from "react";
import "./styles/formone.css";
//import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";
import CountrySelect from "react-bootstrap-country-select";
const FormOne = () => {
  const [value, setValue] = useState(null);
  const [amt, setAmt] = useState(null);
  const [give, setGive] = useState(false);
  const [secondForm, setSecondForm] = useState(false);
  const [submit, setSubmit] = useState(false);
  return (
    <>
      {submit === false && secondForm === false && (
        <div className="container d-flex justify-content-end mt-5">
          <form>
            <div className="font-weight-bold h2">
              HELP US TRANSFORM A CHILD’S LIFE
            </div>
            <div className="d-flex justify-content-center">
              <div
                className="btn-group btn-group-toggle mt-4"
                data-toggle="buttons"
              >
                <label
                  className="btn btn-outline-dark btn-lg"
                  onClick={() => {
                    setAmt("3600");
                  }}
                >
                  <input
                    type="radio"
                    name="options"
                    id="option1"
                    autocomplete="off"
                    checked
                  />{" "}
                  ₹ 3600
                </label>
                <label
                  className="btn btn-outline-dark btn-lg"
                  onClick={() => {
                    setAmt("10800");
                  }}
                >
                  <input
                    type="radio"
                    name="options"
                    id="option2"
                    autocomplete="off"
                  />{" "}
                  ₹ 10800
                </label>
                <label
                  className="btn btn-outline-dark btn-lg"
                  onClick={() => {
                    setAmt("18000");
                  }}
                >
                  <input
                    type="radio"
                    name="options"
                    id="option3"
                    autocomplete="off"
                  />{" "}
                  ₹ 18000
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="d-flex justify-content-center mt-4">
                <img
                  src={require(`./images/rsss.png`)}
                  width="15"
                  height="30"
                  className="mr-1"
                  alt="rupee img"
                />
                <input
                  className="ml-1"
                  type="number"
                  step="any"
                  name="custom_price"
                  id="custom-price"
                  placeholder={amt != null ? amt : "Other amount"}
                  value={amt != null ? amt : "Other amount"}
                  onClick={() => {
                    setAmt(null);
                  }}
                  onChange={(event) => {
                    setAmt(event.target.value);
                  }}
                ></input>
              </div>
            </div>
            {give && (amt < 500 || amt != null) && (
              <div className="d-flex justify-content-center text-danger">
                Please enter an amount above Rs 500
              </div>
            )}
            <div className="d-flex justify-content-center">
              <button
                // style={{ color: "pink" }}
                style={{ backgroundColor: "#EB258B" }}
                type="submit"
                className="btn shadow-none btn-block mt-4 text-white"
                onClick={(e) => {
                  e.preventDefault();
                  setGive(true);
                  if (amt >= 500) {
                    setSecondForm(true);
                  }
                }}
              >
                GIVE NOW{"   "}🤍
                {/* <img
                  // src={require(`./images/heart.svg`)}
                  height="17"
                  className="pb-1 heart"
                  alt="white-heart"
                /> */}
              </button>
            </div>
          </form>
        </div>
      )}
      {secondForm === true && (
        <div className="container d-flex justify-content-end mt-5">
          <form>
            <div className="form-row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile"
                />
              </div>
            </div>
            <input
              type="text"
              className="form-control mt-2"
              id="inputEmail4"
              placeholder="Address"
            />
            <input
              type="email"
              className="form-control mt-2"
              id="inputEmail4"
              placeholder="Email"
            />
            {/* <CountrySelect value={value} onChange={setValue} /> */}
            <div className="form-row mt-2">
              <div className="col">
                <CountrySelect value={value} onChange={setValue} />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                />
              </div>
            </div>
            <div className="form-row mt-2">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Zip/Pincode"
                />
              </div>
            </div>
            <div className="d-flex justify-content-start">
              <button
                style={{ backgroundColor: "#EB258B" }}
                className="btn shadow-none btn-warning btn-sm text-white mt-2"
                onClick={() => {
                  setSecondForm(false);
                }}
              >
                Previous
              </button>
            </div>
            <div className="d-flex justify-content-center">
              <button
                style={{ backgroundColor: "#EB258B" }}
                type="submit"
                className="btn shadow-none btn-warning btn-block mt-2 text-white"
                onClick={(e) => {
                  e.preventDefault();
                  setSubmit(true);
                  setSecondForm(false);
                  // setGive(true);
                  // if (amt >= 500) {
                  //   setSecondForm(true);
                  // }
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
      {/* {submit === true && <Payment />} */}
    </>
  );
};

export default FormOne;
