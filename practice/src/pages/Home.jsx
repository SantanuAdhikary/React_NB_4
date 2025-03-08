import React, { Fragment } from "react";

const Home = () => {
  let a = 10,
    b = 20;

  let myName = "santanu";
  return (
    <Fragment>
      <h1> I am Home component</h1>
      <p> Lorem ipsum dolor, sit amet consectetur adipisicing.</p>

      <h2> {a + b} </h2>

      <h3> {myName.toUpperCase()}</h3>

      {true}

      <img src="" alt="" />
      <br />
      <hr />
    </Fragment>
  );
};

export default Home;
