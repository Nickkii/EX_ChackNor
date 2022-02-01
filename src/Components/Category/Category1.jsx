import React, { useState, useEffect } from "react";
import CategoryButton from "../CategoryButton";
import axios from "axios";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();

  const [jokes, setJokes] = useState([]);

  const fetchCategory = () => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((res) => res.json())
      .then((result) => setCategories(result))
      .catch((err) => console.log("error"));
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const getResults = async () => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${categories}`
    );
    setJokes(response.data.result);
    console.log(setJokes(response.data.result));
  };

  // const onSnuffOut = (e) => {
  //   e.preventDefault();
  //   getResults();
  //   console.log("aaaaa");
  //   console.log(e);
  // };

  const onSnuffOut = (e) => {
    const cater = e.target.value;
    const url = `https://api.chucknorris.io/jokes/random?category=${cater}`;
    fetch(url)
      .then((responce) => responce.json())
      .then((data) => setJokes({ jokes: data }));
    console.log("aaaaa");
    console.log(cater);
  };

  return (
    <>
      <div className="categoryList">
        {categories &&
          categories.map((category, index) => (
            <div
              className="categoryItem"
              key={index}
              onClick={onSnuffOut}
              onChange={(e) => setCategory(e.target.value)}
            >
              {category}
            </div>
          ))}
        {/* <div>
        <p>{jokes}</p>
      </div> */}
      </div>

      {/* {jokes.map((joke) => {
        return <>{joke.value}</>;
      })} */}
    </>
  );
};
export default Category;
