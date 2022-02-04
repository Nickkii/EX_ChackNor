import Favorite from "../Favorite";
import Main from "../Main";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="block">
          <div className="mainBlockHome">
            <header>
              <h1 className="logo">Chuck Norris facts</h1>
            </header>
            <div className="titleHeader">
              <h2 className="titleHeaderH2">Hey!</h2>
              <h3 className="titleHeaderH3">
                Let’s try to find a joke for you:
              </h3>
            </div>
            <div className="radioButtonBlock">
              <Main />
            </div>
          </div>

          <div className="favorite">
            <Favorite />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
