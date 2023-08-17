import {createContext, useEffect, useState} from "react";
import {EDTService} from "../services/edtService.js";
import {PexelsService} from "../services/pexelsService.js";
import {getRandomIndex} from "../utils/index.js";
import {toast} from "sonner";


export const RestaurantsContext = createContext()

const initializeData = async () => {

  const restaurantsRequest = EDTService.getData()
  const photosRequest = PexelsService.getPhotosByQuery("restaurants", 100)

  const [restaurantsResponse, photosResponse] = await Promise.all([restaurantsRequest, photosRequest])

  const restaurantsWidthImage = restaurantsResponse.map( (obj, idx) => {
    return {
      ...obj,
      image: photosResponse[idx] || photosResponse[getRandomIndex()]
    }
  })
  return restaurantsWidthImage
}
export const RestaurantsProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [dataIsLoading, setDataIsLoading] = useState(true);
  const [restaurantSelected, setRestaurantSelected] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getEDTData = async ()  => {
      setDataIsLoading(true)
      const data = await initializeData()
      setRestaurants(data)
      setFilteredRestaurants(data)
      setDataIsLoading(false)
    }

    getEDTData()
  }, []);

  const selectRestaurant = (restaurantId) => {
    const restaurant = restaurants.find(obj => obj.id === restaurantId)
    console.log(restaurant)
    setRestaurantSelected(restaurant)
  }

  const resetRestaurantSelected = () => {
    setRestaurantSelected(null)
  }

  const interactWithRestaurant = (idRestaurant, value) => {
    const restaurantsUpdated = restaurants.map(obj => {
      if (obj.id !== idRestaurant) return obj
      obj.rating = value < 0
        ? Math.max( 0 , obj.rating + value)
        : Math.min( 4 , obj.rating + value)
      return obj
    })

    setRestaurants(restaurantsUpdated)
  }

  const filterByRating = (ratingToFilter) => {
    const filteredRestaurants = restaurants.filter(obj => obj.rating === ratingToFilter)
    setFilteredRestaurants(filteredRestaurants)
  }

  const filterBySearch = (textValue) => {
    console.log(textValue)
    if (!textValue) {
      console.log(restaurants)
      setFilteredRestaurants(restaurants)
    }
    const filterData = filteredRestaurants.filter(obj => obj.name.toLowerCase().includes(textValue.toLowerCase()) )
    setFilteredRestaurants(filterData)
  }

  const resetFilters = () => {
    setFilteredRestaurants(restaurants)
  }

  return (
    <RestaurantsContext.Provider value={{
      restaurants,
      filteredRestaurants,
      dataIsLoading,
      selectRestaurant,
      restaurantSelected,
      resetRestaurantSelected,
      interactWithRestaurant,
      filterByRating,
      filterBySearch,
      resetFilters,

    }}>
      {children}
    </RestaurantsContext.Provider>
  )
}

