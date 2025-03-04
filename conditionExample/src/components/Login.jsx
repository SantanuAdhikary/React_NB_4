import React from "react";

const Login = () => {
  return (
    <>
      <div className="con">
        <h2> login </h2>

        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" />

          <label htmlFor="">Password</label>
          <input type="text" />

          <button>login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
