import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./LoginPopup.css"
const LoginPopup = ({ setShowLogin }) => {
  const [formState, setFormState] = useState("sign-up");
  return (
    <div className="login-popup">
      <form className="login-popup-form">
        <div className="form-title">
          {formState === "sign-up" ? <h2>Sign Up</h2> : <h2>Sign In</h2>}
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {formState === "sign-up" ? (
            <input type="text" placeholder="Your name" />
          ) : (
            <></>
          )}

          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Your password" />
        </div>
        {formState === "sign-up" ? (
          <button>Create account</button>
        ) : (
          <button>Login</button>
        )}

        <div className="checkbox-container">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {formState === "sign-up" ? (
          <p>
            Already have an account?
            <span onClick={() => setFormState("sign-in")}> Login here</span>
          </p>
        ) : (
          <p>
            Create a new account?
            <span onClick={() => setFormState("sign-up")}> Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
