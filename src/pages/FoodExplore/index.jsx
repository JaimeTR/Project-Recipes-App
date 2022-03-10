import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer';
import HeaderWithSearch from '../../components/Header/HeaderWithSearch';

function FoodExplore() {
  const RANDOM_FOOD_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const history = useHistory();

  const handleSurpriseMe = async () => {
    const response = await fetch(RANDOM_FOOD_ENDPOINT);
    const data = await response.json();
    history.push(`/foods/${data.meals[0].idMeal}`);
  };

  return (
    <div>
      <HeaderWithSearch name="Explore Foods" verifc={ false } />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => (history.push('/explore/foods/ingredients')) }
      >
        By Ingredient
      </button>
      <button
        type="button"
        data-testid="explore-by-nationality"
        onClick={ () => (history.push('/explore/foods/nationalities')) }
      >
        By Nationality
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ handleSurpriseMe }
      >
        Surprise me!
      </button>
      <Footer />
    </div>
  );
}

export default FoodExplore;
