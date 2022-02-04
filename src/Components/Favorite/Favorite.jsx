import React from "react";
import Joke from "../JokeList";

const Favorite = ({ favouriteJokes, setFavouriteJokes }) => {
  // const [state, setState] = useState([]);

  return (
    <>
      {/* <div className="favourite__cards-wrapp">
        {favouriteJokes.map((joke) => {
        const state = {
          joke: joke.value,
          id: joke.id,
          url: joke.url,
          updated_at: joke.updated_at,
          categories: joke.categories,
          favouriteJokes={favouriteJokes},
setFavouriteJokes={setFavouriteJokes}
        };
        return <Joke state={state} key={state.id} />;
      })}
      </div> */}
    </>
  );
};

export default Favorite;
