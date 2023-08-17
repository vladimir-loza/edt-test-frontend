import {useContext} from "react";
import {RestaurantsContext} from "../context/restaurantsContext.jsx";

export const StatusLabels = () => {
  const {filteredRestaurants} = useContext(RestaurantsContext);
  return (
    <h3 className="text-center">Restaurants count: {filteredRestaurants.length}</h3>
  )
}