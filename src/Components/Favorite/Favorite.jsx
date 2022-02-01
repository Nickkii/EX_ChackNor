import React from "react";

const Favorite = (props) => {
  const { favoriteList, toggleFavorite } = props;
  return (
    // <div style={{ width: "50%", padding: "0 1rem" }}>
    //   <ListHeader style={{ color: "white" }}>
    //     <Icon icon={faStar} color="gold" />
    //     &nbsp;
    //     {favoriteList.length}/10
    //   </ListHeader>
    <>
      <div className="favoriteBlock"></div>
    </>
    // <div className="favoriteBlock">
    //   {favoriteList.map((joke, i) => (
    //     <>
    //       key={joke.id}
    //       {/* <DeleteButton onClick={() => toggleFavorite(joke)} fixedWidth> */}
    //       {/* <Icon icon={faTimes} /> */}
    //       {joke.joke}
    //     </>
    //   ))}
    // </div>
  );
};

export default Favorite;
