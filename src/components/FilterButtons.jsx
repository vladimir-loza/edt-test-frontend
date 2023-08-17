import {FilterButton} from "./FilterButton.jsx";
import {useContext} from "react";
import {RestaurantsContext} from "../context/restaurantsContext.jsx";
import {BiSolidTrash} from "react-icons/bi";

const filterObjects = [
  {
    // text: "Rating 0 😢",
    text: "Rating 0",
    rating: 0,
  },
  {
    // text: "Rating 1 😔",
    text: "Rating 1",
    rating: 1,
  },
  {
    // text: "Rating 2 😐",
    text: "Rating 2",
    rating: 2,
  },
  {
    // text: "Rating 3 😀",
    text: "Rating 3",
    rating: 3,
  },
  {
    // text: "Rating 4 😍",
    text: "Rating 4",
    rating: 4,
  },
]

export const FilterButtons = () => {
  const {filterByRating, resetFilters} = useContext(RestaurantsContext)
  const onFilter = (rating) => {
    filterByRating(rating)
  }
  return (
    <div className="container mx-auto flex flex-wrap gap-5 justify-center">
      {
        filterObjects.map(({text, rating}) => (
          <FilterButton key={text} text={text} event={() => onFilter(rating)}/>
        ))
      }
      <button
        type="button"
        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900
        focus:outline-none bg-white rounded-lg border border-gray-200
        hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-indigo-200"
        onClick={resetFilters}
      >
        <BiSolidTrash />
      </button>
    </div>
  )
}