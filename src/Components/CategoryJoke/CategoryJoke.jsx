import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Category from "../Category";
import listImg from "../IMG/img-list-block-favorite.png";
import likeIMG from "../IMG/Vector.png";
import link from "../IMG/link.png";
import unlikeIMG from "../IMG/heart.png";
import categoryItemActiveName from "../Category";

const CategoryJoke = () => {
  const [state, setJokes] = useState({
    joke: "",
    id: "",
    url: "",
    categories: [],
  });

  useEffect(() => {
    fetchDate();
  }, []);

  const fetchDate = async () => {
    const result = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${categoryItemActiveName}`
    );
    console.log(result);
    setJokes({
      ...state,
      joke: result.data.value,
      id: result.data.id,
      url: result.data.url,
      updated_at: result.data.updated_at,
      categories: result.data.categories,
    });
  };

  return (
    <>
      <div className="ramdomListJoke">
        <div className="ramdomUnitBlock">
          <div className="ramdomUnitBlockImg">
            <img src={listImg} />
          </div>
          <div className="ramdomUnitBlockText">
            <div className="ramdomUnitBlockId">
              ID:{" "}
              <a href={state.url}>
                {state.id} <img className="linkImg" src={link} />
              </a>
            </div>
            <div className="ramdomUnitBlockJoke">{state.joke}</div>
            <div className="ramdomUnitBlockUpdateANDCategory">
              <div className="ramdomUnitBlockUpdate">
                Last update:
                {Math.round(
                  (new Date().getTime() -
                    new Date(state.updated_at).getTime()) /
                    3600000
                ) + " hours ago"}
              </div>
              <div className="ramdomCategory"> {state.categories[0]}</div>
            </div>
          </div>

          <div className="ramdomUnitBlockImgHeart">
            {/* <button className="buttonLike" onClick={() => like()}>
              <img
                className="heart-icon"
                id={state.url}
                alt="like icon"
                src={isLiked ? unlikeIMG : likeIMG}
              />
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryJoke;
