import React, { useState } from "react";
import Random from "../Random";
import Category from "../Category";
import Search from "../Search";

const Radio = (props) => {
  const [choosenRadio, setChoosenRadio] = useState("random");

  const handleSelectChange = () => {
    if (choosenRadio === "random") {
      <Random />;
    } else if (choosenRadio === "categories") {
      <Category />;
    } else if (choosenRadio === "search") {
      <Search />;
    }

    console.log({ choosenRadio });
  };

  return (
    <div onChange={(e) => setChoosenRadio(e.target.id)}>
      <div className="formRadioButton">
        <div className="formRadioButtonInput">
          <label className="searchRadioLabel">
            <input id="random" type="radio" name="radio" value="random" />
            Random
          </label>
        </div>
      </div>

      <div className="formRadioButton">
        <div className="formRadioButtonInput">
          <label className="searchRadioLabel">
            <input
              id="categories"
              type="radio"
              name="radio"
              value="fromCategories"
            />
            From categories
          </label>
        </div>
        <div>{choosenRadio === "categories" && <Category />}</div>
      </div>
      <div className="formRadioButton">
        <div className="formRadioButtonInput">
          <label className="searchRadioLabel">
            <input id="search" type="radio" name="radio" value="search" />
            Search
          </label>
        </div>
        <div>{choosenRadio === "search" && <Search />} </div>
      </div>
      <div>{choosenRadio === "random" && <Random />} </div>
      {/* <button
        type="submit"
        className="RadioButton"
        onClick={() => handleSelectChange()}
      >
        Get a joke
      </button> */}
    </div>
  );
};
export default Radio;
