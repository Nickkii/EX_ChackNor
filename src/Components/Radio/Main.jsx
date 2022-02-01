import React, { useState } from 'react';
import Joke from '../Random';
import Category from '../Category';
import Search from '../Search';
import axios from 'axios';

const baseUrl = 'https://api.chucknorris.io/jokes/'
const Main = (props) => {
  const [state, setState] = useState([]);
  const [query, setQuery] = useState('');
  const [choosenRadio, setChoosenRadio] = useState('random');

  const fetchData = async () => {
    let url = baseUrl
    if (choosenRadio === 'random') {
      url = `${url}random`
    }
    if (choosenRadio === 'search') {
      url = `${url}search?query=${query}`
    }
    const result = await axios.get(url);
    console.log(result);
    if (Array.isArray(result.data.result)) {
      setState(result.data.result)
      return
    }
    setState([result.data]);
  };

  function handleChange(event) {
    // console.log('target ===> ', event.target)
    // console.log('current target ===> ', event.currentTarget)
    // console.log('id ===> ', event.target.id)
    setChoosenRadio(event.target.id);
  }
  return (
    <div>
      <div className="formRadioButton">
        <div className="formRadioButtonInput">
          <label className="searchRadioLabel">
            <input
              id="random"
              type="radio"
              checked={choosenRadio === 'random'}
              onChange={handleChange}
            />
            Random
          </label>
        </div>
      </div>

      <div className="formRadioButton">
        <div className="formRadioButtonInput">
          <label className="searchRadioLabel">
            <input
              id="categories"
              type="radio"
              onChange={handleChange}
              checked={choosenRadio === 'categories'}
            />
            From categories
          </label>
        </div>
        <div>{choosenRadio === 'categories' && <Category />}</div>
      </div>
      <div className="formRadioButton">
        <div className="formRadioButtonInput">
          <label className="searchRadioLabel">
            <input
              id="search"
              type="radio"
              onChange={handleChange}
              checked={choosenRadio === 'search'}
            />
            Search
          </label>
        </div>
        <div>{choosenRadio === 'search' && <Search query={query} setQuery={setQuery}/>} </div>
      </div>
      {state.map(joke => {
        const state = {
          joke: joke.value,
          id: joke.id,
          url: joke.url,
          updated_at: joke.updated_at,
          categories: joke.categories,
        }
        return <Joke state={state} />
      })}
      <button type="submit" className="RadioButton" onClick={fetchData}>
        Get a joke
      </button>
    </div>
  );
};
export default Main;
