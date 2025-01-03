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
              <input className="num-inp"
                type="text"
                onChange={handlePhoneNumber}
                placeholder="Enter phone number"
              ></input>
              <button className="btn" value={phone} onClick={handleSubmit}>
                Submit
              </button>
          </div>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to : {phone}</p>
          <OtpInput length={4} OtpSubmit={onOtpSubmit}></OtpInput>
        </div>
      )}
    </div>
  );
};

export default Phone;
