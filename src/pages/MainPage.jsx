import { useContext } from "react";
import {RestaurantCard} from "../components/RestaurantCard.jsx";
import {RestaurantsContext} from "../context/restaurantsContext.jsx";
import {LoadingSkeleton} from "../components/LoadingSkeleton.jsx";
import {FilterButtons} from "../components/FilterButtons.jsx";
import {InputSearch} from "../components/InputSearch.jsx";
import {StatusLabels} from "../components/StatusLabels.jsx";
export const MainPage = () => {
  const {filteredRestaurants, dataIsLoading,} = useContext(RestaurantsContext)

  if (dataIsLoading) return <LoadingSkeleton />

  return (
    <div className="container mx-auto flex flex-wrap gap-3 mt-16 justify-center">
      <StatusLabels />
      <FilterButtons />
      {
        filteredRestaurants.map(resObj => (
          <RestaurantCard key={resObj.id} restaurant={resObj}/>
        ))
      }
    </div>
  )
}
