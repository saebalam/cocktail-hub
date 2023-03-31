import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ drink }) => {
  return (
    <article className="cocktail">
      {console.log(drink)}
      <div className="img-container">
        <img src={drink.strDrinkThumb} alt={drink.strName} />
      </div>
      <div className="cocktail-footer">
        <h3>{drink.strDrink}</h3>
        <h4>{drink.strGlass}</h4>
        <p>{drink.strAlcoholic}</p>
        <Link
          to={`/cocktail/${drink.idDrink}`}
          className="btn btn-primary btn-details"
        >
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
