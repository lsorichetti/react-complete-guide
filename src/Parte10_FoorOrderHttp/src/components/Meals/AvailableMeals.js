import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

import useHTTP from '../../hooks/use-http';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {

  const [isLoading, error, sendRequest] = useHTTP();
  const [mealsList, setMeals] = useState([]);

  useEffect(()=>{

    const callbackFn = (data) => {

      let mealsListAux = [];
      for(const key in data){
        mealsListAux.push({
          id: key,
          ...data[key]
        });
      }
      setMeals(mealsListAux);
    }

    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET',
      url: 'https://react-complete-guide-ad65c-default-rtdb.firebaseio.com/meals.json'
    }
    sendRequest(config, callbackFn)
  }, [sendRequest]);

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>Error: {error.message}</p>}
        {!isLoading && !error && mealsList.length === 0 && <p>Not meals found</p>}
        {!isLoading && !error && mealsList.length > 0 && 
            <ul>
              {mealsList.map( meal => 
                  <MealItem
                  key={meal.id}
                  id={meal.id}
                  name={meal.name}
                  description={meal.description}
                  price={meal.price}
                  />
                  )}
            </ul>
        }      
      </Card>
    </section>
  );
};

export default AvailableMeals;
