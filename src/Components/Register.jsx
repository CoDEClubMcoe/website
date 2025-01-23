import React from "react";

function Register()
{
    return(
        <div>
        <h1>Registration Page</h1>
        <form>
          <div>
            <label>Name: </label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div>
            <label>Email: </label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
}

export default Register;