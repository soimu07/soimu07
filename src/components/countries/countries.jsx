import React, { useState } from "react";
import styles from "./countries.scss";
import { COUNTRIES_LIST } from "../../content";
import countriesList from "../../content/countries-list";

const countriesArray = Object.values(COUNTRIES_LIST);

const Countries = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [keyCode, setKeyCode] = useState(0);
  const [country, setCountry] = useState(null);
  const [noResults, setNoResults] = useState(false);

  const onKeyDown = (e) => {
    setKeyCode(e.keyCode || e.which);
  };

  const onSearchCountry = (e) => {
    setSearch(e.target.value);
    let searchList = [];
    if (keyCode === 8) {
      if (!e.target.value.length) {
        setResults([]);
        setNoResults(false);
      } else {
        searchList = countriesArray;
      }
    } else {
      searchList = results.length ? results : countriesArray;
    }

    if (e.target.value) {
      const filter = searchList.filter((element) =>
        element.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if (filter.length) {
        setResults(filter);
        setNoResults(false);
      } else {
        setResults([]);
        setNoResults(true);
      }
    }

    setCountry(null);
  };

  const onSelectCountry = (c) => {
    setCountry(c);
    setSearch("");
    setResults([]);
  };

  return (
    <div>
      <input
        placeholder="Location"
        value={search}
        onChange={(e) => onSearchCountry(e)}
        onKeyDown={(e) => onKeyDown(e)}
      ></input>
      <div>
        {results.map((c) => (
          <p key={c} onClick={() => onSelectCountry(c)}>
            {c}
          </p>
        ))}
      </div>
      {country && <p>Country: {country}</p>}
      {noResults && <p>No results.</p>}
    </div>
  );
};

export default Countries;
