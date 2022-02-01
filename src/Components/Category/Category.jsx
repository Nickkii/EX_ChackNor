import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import listImg from "../IMG/img-list-block-favorite.png";
import likeIMG from "../IMG/Vector.png";
import link from "../IMG/link.png";
import unlikeIMG from "../IMG/heart.png";
import CategoryJoke from "../CategoryJoke";

const Category = () => {
  const [categories, setCategories] = useState([]);
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

  useEffect(() => {
    category.current = categories[0];
  }, []);

  const category = useRef();

  const onSnuffOut = (e) => {
    if (e.target.classList.contains("categoryItem")) {
      const categories = Array.from(e.target.children);
      categories.forEach((category) =>
        category.classList.remove("categoryItemActive")
      );
      e.target.classList.add("categoryItemActive");
      category.current = e.target.innerText.toLowerCase();
      console.log(category);
    }
  };

  const getResults = async () => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category.current}`
    );
    setJokes(response.data.result);
    console.log(response);
  };

  const categoryItemActiveName = category.current;

  return (
    <>
      <div className="categoryList" onClick={onSnuffOut}>
        {categories &&
          categories.map((category, index) => {
            return (
              <div className="categoryItem" key={category}>
                {category}
              </div>
            );
          })}
      </div>

      {jokes.map((joke) => {
        return (
          <>
            <CategoryJoke />
          </>
        );
      })}
    </>
  );
};
export default Category;
