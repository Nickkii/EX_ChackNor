import React from "react";
import { useState, useEffect } from "react";
import listImg from "../IMG/img-list-block-favorite.png";
import likeIMG from "../IMG/Vector.png";
import link from "../IMG/link.png";
import unlikeIMG from "../IMG/heart.png";

export const Context = React.createContext();

const divStyleisLikedJoke = {
  display: "none",
};

const JokeList = ({ state }) => {
  const [isLiked, setIsLiked] = useState(
    localStorage.getItem(state.id) ? true : false
  );

  const like = (e) => {
    if (localStorage.getItem(state.id)) {
      setIsLiked(false);
      localStorage.removeItem(state.id);
      document.getElementById(state.url).src = unlikeIMG;
    } else {
      setIsLiked(true);
      localStorage.setItem(state.id, JSON.stringify(state));
      document.getElementById(state.url).src = likeIMG;
      console.log(state.joke);
      let added_item_button = document.getElementById("isLikedJoke");
      let actualDisplay = getComputedStyle(added_item_button).display;
      if (actualDisplay == "none") {
        added_item_button.style.display = "block";
      }
      // } else {
      //   added_item_button.add += ".";
      // }
    }
  };

  if (!state.id) {
    return null;
  }
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
            <button className="buttonLike" onClick={(e) => like(e)}>
              <img
                className="heart-icon"
                id={state.url}
                alt="like icon"
                src={isLiked ? unlikeIMG : likeIMG}
              />
              <div
                id="isLikedJoke"
                className="isLikedJoke"
                style={divStyleisLikedJoke}
              >
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
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default JokeList;
