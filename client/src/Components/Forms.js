import { useState } from "react";
export default function Forms() {
  const [firstNameError, setfirstNameError] = useState(false);
  const [lastNameError, setlastNameError] = useState(false);
  const [emailError, setemailError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setfirstNameError(isValidText(e.target.firstName.value));
    setlastNameError(isValidText(e.target.lastName.value));
    isEmailValid(e.target.email.value);
    isPasswordValid(e.target.password.value);

    postData({
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    });
  };

  const postData = async (data) => {
    const response = await fetch("https://myendpoint.com", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  function isValidText(text) {
    return text !== "" ? false : true;
  }

  const isEmailValid = (email) => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
    return email.match(validRegex) ? setemailError(false) : setemailError(true);
  };

  const isPasswordValid = (password) => {
    password !== "" ? setpasswordError(false) : setpasswordError(true);
  };
  return (
    <div className="right">
      <p className="tryIt">
        <b>Try it free 7 days</b> then $20/mo. thereafter
      </p>
      <div className="cardForm">
        <form onSubmit={onSubmit}>
          <div className="formInput">
            <input type="text" placeholder="First Name" id="firstName" />
            {firstNameError && (
              <img src="/images/icon-error.svg" alt="error" className="error" />
            )}
          </div>
          <div className="formInput">
            <input type="text" placeholder="Last Name" id="lastName" />
            {lastNameError && (
              <img src="/images/icon-error.svg" alt="error" className="error" />
            )}
          </div>

          <div className="formInput">
            <input type="emailError" placeholder="email" id="email" />
            {emailError && (
              <img src="/images/icon-error.svg" alt="error" className="error" />
            )}
          </div>

          <div className="formInput">
            <input type="password" placeholder="password" id="password" />
            {passwordError && (
              <img src="/images/icon-error.svg" alt="error" className="error" />
            )}
          </div>
          <button type="submit">
            <b>CLAIM YOUR FREE TRIAL</b>
          </button>
        </form>
        <p className="terms">
          By clicking this button you are agreeing to our{" "}
          <span className="services">Terms and Services</span>
        </p>
      </div>
    </div>
  );
}
