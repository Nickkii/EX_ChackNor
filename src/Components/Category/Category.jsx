import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Joke from "../JokeList";

const Category = ({ categories, setCategories }) => {
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

  const fetchcategoryItem = async (e) => {
    if (e.target.classList.contains("categoryItem")) {
      const categories = Array.from(e.target.children);
      categories.forEach((category) =>
        category.classList.remove("categoryItemActive")
      );
      e.target.classList.add("categoryItemActive");
      category.current = e.target.innerText.toLowerCase();
      console.log(category);
      console.log(category.current);
    }
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category.current}`
    );
    setJokes([response.data]);
  };

  return (
    <>
      <div className="categoryList">
        {categories &&
          categories.map((category, index) => {
            return (
              <div
                className="categoryItem"
                key={category}
                onClick={fetchcategoryItem}
              >
                {category}
              </div>
            );
          })}
      </div>

      {jokes.map((joke) => {
        const state = {
          joke: joke.value,
          id: joke.id,
          url: joke.url,
          updated_at: joke.updated_at,
          categories: joke.categories,
        };
        return <Joke state={state} key={state.id} />;
      })}
    </>
  );
};
export default Category;
