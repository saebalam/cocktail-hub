import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const SearchForm = ({ passvalue }) => {
  const [search, setSearch] = useState("");

  //set search value
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  //pass serach value to parent
  useEffect(() => {
    passvalue(search);
  }, [search]);

  return (
    <div className="SearchBox">
      <input
        type="text"
        className="SearchText"
        value={search}
        placeholder="Search a cocktail"
        onChange={(e) => handleInput(e)}
      ></input>

    </div>
  );
};

export default SearchForm;
