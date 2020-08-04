import React, { useState } from 'react';
import './App.css';
import { fetchWeather } from "./api/fetchWeather.js";

/**LEARNT -> You attempted to import ../api/fetchWeather.js which falls outside of the project src/ directory. Relative imports outside of src/ are not supported. */

const App = () => {
  const {query, setQuery} = useState('')
  // const {weather, setWeather} = useState({})  //we are creating new state fields

  const search = async (event) => {
    if(event.key === 'Enter'){
      const data = await fetchWeather(query)

      // setWeather(data)
      setQuery('')  //resetting the query string
    }
  }
    /*The most important things, when it comes to each react input ->
      `value` and `onChange`

      For these we will use the  useState() hook
    */

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query  /*This should be in the state */}
        onChange={(event) => setQuery(event.target.value) /*Needs to be something coming from the state */}
        onKeyPress={search  /*if the keyPressed was enter or not, is decided in the handler */}
      />

      {/* {weather.main   /*Checking if weather.main exists (won't be initially) */} */}
    </div>
  );
}

export default App;
