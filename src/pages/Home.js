import React, { useState, useEffect } from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import axios from "axios";
import Loader from "../components/Loader";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchvalue, setSearchValue] = useState("");

  //getting search value from child form
  const passvalue = (passvalue) => {
    setSearchValue(passvalue);
  };

  //function to get data from api
  const getData = async () => {
    const data = await axios.get(url).then((res) => res.data);
    setData(data.drinks);
    setFilteredData(data.drinks);
    setLoading(!loading)
  };

  //fetch all data after first render
  useEffect(() => {
    getData();
  }, []);

  //filter data on search
  useEffect(() => {
    if (!searchvalue) return;

    setTimeout(() => {
      const searchdata = data.filter((item) => {
        return item.strDrink.toLowerCase().includes(searchvalue.toLowerCase());
      });
      setFilteredData(searchdata);
    }, 400);
  }, [searchvalue]);

  return (
    <div className="main">
      <SearchForm passvalue={passvalue} />
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div>
            {filteredData.length < 0 ? (
              <h1 style={{ textAlign: "center", marginTop: "100px" }}>
                No such cocktail found
              </h1>
            ) : (
              <CocktailList drinks={filteredData} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
