import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import listImg from "../IMG/img-list-block-favorite.png";
import likeIMG from "../IMG/Vector.png";
import link from "../IMG/link.png";
import unlikeIMG from "../IMG/heart.png";

import Favorite from "../Favorite";

export const Context = React.createContext();

const Ramdom = () => {
  const [state, setState] = useState({
    joke: "",
    id: "",
    url: "",
    categories: [],
  });

  useEffect(() => {
    fetchDate();
  }, []);

  const fetchDate = async () => {
    const result = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(result);
    setState({
      ...state,
      joke: result.data.value,
      id: result.data.id,
      url: result.data.url,
      updated_at: result.data.updated_at,
      categories: result.data.categories,
    });
  };

  const [isLiked, setIsLiked] = useState(
    localStorage.getItem(state.id) ? true : false
  );

  const like = () => {
    if (localStorage.getItem(state.id)) {
      setIsLiked(false);
      localStorage.removeItem(state.id);
      document.getElementById(state.url).src = unlikeIMG;
      document.getElementById(state.url).src = unlikeIMG;
    } else {
      setIsLiked(true);
      localStorage.setItem(state.id, JSON.stringify(state));
      document.getElementById(state.url).src = likeIMG;
      console.log("ffff");
      console.log(state.joke);
    }
    // updateFavorites();
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
            <button className="buttonLike" onClick={() => like()}>
              <img
                className="heart-icon"
                id={state.url}
                alt="like icon"
                src={isLiked ? unlikeIMG : likeIMG}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Ramdom;
