import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";

const CocktailDetails = () => {
  const [loading, setLoading] = useState(true);
  const [cocktailDetails, setCocktailDetails] = useState([]);
  const [ingredients,setIngredients]=useState([])

  const { id } = useParams();

  useEffect(() => {
    async function getCocktailsDetails() {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      if (response.data.drinks) {
        setCocktailDetails(response.data.drinks[0]);
        const ingredients = [
          cocktailDetails.strIngredient1,
          cocktailDetails.strIngredient2,
          cocktailDetails.strIngredient3,
          cocktailDetails.strIngredient4,
          cocktailDetails.strIngredient5,
        ];
        setIngredients(ingredients)
    }
    setLoading(!loading)
    }

    getCocktailsDetails();
  },[]);

  if(loading) return <Loader />

  if (!cocktailDetails) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass, instructions } =
      cocktailDetails;

    return (
      <div>
        {loading
        ? <Loader />
        : <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
        <h2 className="section-title">{cocktailDetails.strDrink}</h2>
        <div className="drink">
          <img src={cocktailDetails.strDrinkThumb} alt={cocktailDetails.name}></img>
          <div className="drink-info">
            <p>
              <span className="drink-data">name :</span> {cocktailDetails.name}
            </p>
            <p>
              <span className="drink-data">category :</span>{" "}
              {cocktailDetails.strCategory}
            </p>
            <p>
              <span className="drink-data">info :</span>{" "}
              {cocktailDetails.strAlcoholic}
            </p>
            <p>
              <span className="drink-data">glass :</span>{" "}
              {cocktailDetails.strGlass}
            </p>
            <p>
              <span className="drink-data">instructons :</span>{" "}
              {cocktailDetails.strInstructions}
            </p>
            <p>
              <span className="drink-data">ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null;
              })}
            </p>
          </div>
        </div>
      </section>

        }
      </div>
      // <div>details</div>
    );
  }
};

export default CocktailDetails;
