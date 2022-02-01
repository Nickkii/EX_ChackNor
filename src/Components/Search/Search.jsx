import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import listImg from "../IMG/img-list-block-favorite.png";
import heart from "../IMG/Vector.png";
import link from "../IMG/link.png";

const Search = ({query, setQuery}) => {
  // const [jokes, setJokes] = useState([]);

  // useEffect(() => {
  //   getResults();
  // }, []);

  // const getResults = async () => {
  //   const response = await axios.get(
  //     `https://api.chucknorris.io/jokes/search?query=${query}`
  //   );
  //   setJokes(response.data.result);
  // };

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   getResults();
  // };

  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     handleSearch(e);
  //   }
  // };

  return (
    <>
     
        <input
          className="searchInput"
          type="search"
          placeholder="Free text search..."
          aria-label="Search"
          onChange={(e) => setQuery(e.target.value)}
          // onKeyDown={handleKeyPress}
          value={query}
          autoFocus={true}
        ></input>
  

      {/* {jokes.map((joke) => {
        return (
          <>
            <div className="ramdomListJoke" key={joke.id}>
              <div className="ramdomUnitBlock">
                <div className="ramdomUnitBlockImg">
                  <img src={listImg} alt="listImg" />
                </div>
                <div className="ramdomUnitBlockText">
                  <div className="ramdomUnitBlockId">
                    ID:
                    <a href={joke.url}>
                      {joke.id} <img className="linkImg" src={link} />
                    </a>
                  </div>
                  <div className="ramdomUnitBlockJoke">{joke.value}</div>
                  <div className="ramdomUnitBlockUpdateANDCategory">
                    <div className="ramdomUnitBlockUpdate">
                      Last update: {joke.updated_at}
                    </div>
                    <div className="ramdomCategory"> {joke.categories[0]}</div>
                  </div>
                </div>
                <div className="ramdomUnitBlockImgHeart">
                  <img src={heart} />
                </div>
              </div>
            </div>
          </>
        );
      })} */}
    </>
  );
};

export default Search;
