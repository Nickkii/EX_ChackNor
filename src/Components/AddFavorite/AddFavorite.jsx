import { useState, useEffect } from "react";
import link from "../IMG/link.png";

const buttonType = {
  inFavorite: {
    type: "inFavorite",
    url: { link },
    class: "inFavorite",
  },
  notInFavorite: {
    type: "notInFavorite",
    url: "../IMG/heart.png",
    class: "notInFavorite",
  },
};
const AddFavorite = ({ inFavorite = undefined, notInFavorite }) => {
  const [type, setType] = useState();

  useEffect(() => {
    if (inFavorite === undefined) {
      return;
    } else {
      setType(inFavorite);
    }
  }, [setType, inFavorite]);

  if (type === true) {
    return (
      <button type="button">
        <img
          src={buttonType.inFavorite.url}
          alt="In favorite button"
          onClick={() => {
            return (<div>yes</div>), setType(false);
          }}
        />
      </button>
    );
  } else {
    return (
      <button type="button">
        <img
          src={buttonType.notInFavorite.url}
          alt="Add to Favorite list"
          onClick={() => {
            return (<div>no</div>), setType(true);
          }}
        />
      </button>
    );
  }
};
export default AddFavorite;
