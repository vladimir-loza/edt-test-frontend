import {useContext, useEffect} from "react";
import {RestaurantsContext} from "../context/restaurantsContext.jsx";
import {useForm} from "../hooks/index.js";

export const InputSearch = () => {
  const {filterBySearch} = useContext(RestaurantsContext)
  const {inputValue, onInputChange} = useForm({search: ""})

  useEffect(() => {
    filterBySearch(inputValue.search)
  }, [inputValue]);

  return (
    <div className="container mx-auto px-10 flex justify-center">
      <input
        type="text"
        name="search"
        value={inputValue.name}
        onChange={onInputChange}
        className="w-4/5 text-sm md:text-md text-black px-2 md:px-4 py-2 md:py-3 rounded-lg bg-white mt-2 border focus:border-indigo-500 focus:bg-white focus:outline-none "
      />
    </div>
  )
}