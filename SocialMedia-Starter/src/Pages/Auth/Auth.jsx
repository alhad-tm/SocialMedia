import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webname">
          <h1>Social media</h1>
          <h6>Share and explore ur ideas throughout the world</h6>
        </div>
      </div>
      {/* <Signup /> */}
      <Login/>
    </div>
  );
};

// login

function Login() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>

          <div>
            <input
              type="text"
              placeholder="Userame"
              className="infoInput"
              name="username"
            />
          </div>

         
          <div>
            <input
              type="password"
              placeholder="Password"
              className="infoInput"
              name="password"
            />
           </div>

          <div>
              <span style={{fontSize:"13px"}}>
                Dont have an account? SignUp
              </span>
         
          <button className="button infoButton" type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }


// signup

function Signup() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign Up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstName"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastName"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="userName"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="infoInput"
            name="password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="infoInput"
            name="confirmPass"
          />
        </div>
        <div>
            <span style={{fontSize:"13px"}}>Already have an account? Login</span>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Auth;
