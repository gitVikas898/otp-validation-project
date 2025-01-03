import React, { useRef, useState } from "react";
import OtpInput from "./OtpInput";

const Phone = () => {
  const [phone, setPhone] = useState("");

  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const regex = /[^0-9]/g;

    if (phone.length < 10 || regex.test(phone)) {
      alert("Invalid Phone Number");
      return;
    }

    setShowOtpInput(true);
  };
  const handlePhoneNumber = (event) => {
    setPhone(event.target.value);
  };

  const onOtpSubmit = (otp) => {
    setTimeout(()=>{
        alert("Login Successfull");
    },3000)
  };

  return (
    <div className="phone">
      {!showOtpInput ? (
        <form action="" onSubmit={handleSubmit}>
          <div className="input-cont">
                <div className="box-inp">
                    <div className="box"><p>+91</p></div>
                                  <input className="num-inp"
                    type="text"
                    onChange={handlePhoneNumber}
                    placeholder="Enter phone number"
                                  ></input>
                </div>
              <p className="text">By proceeding you confirm that you are <br></br>above 18 years of age and agree to the <br /> Privacy Policy & Terms of Use.</p>
              {  <button className="btn" style={{
              opacity: phone.length === 10 ? 1 : 0,
              visibility: phone.length === 10 ? "visible" : "hidden",
              transition: "opacity 0.3s ease, visibility 0.5s ease",
            }} value={phone} onClick={handleSubmit}>
                Get OTP
              </button>}
          </div>
        </form>
      ) : (
        <div>
          <p >Enter OTP sent to : {phone}</p>
          <OtpInput length={4} OtpSubmit={onOtpSubmit}></OtpInput>
        </div>
      )}
    </div>
  );
};

export default Phone;
