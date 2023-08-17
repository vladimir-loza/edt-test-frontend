import {useContext} from "react";
import {RestaurantsContext} from "../context/restaurantsContext.jsx";

export const RestaurantCard = ({restaurant}) => {
  const { selectRestaurant } = useContext(RestaurantsContext)
  const {address, contact, image, rating, name, id} = restaurant
  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow p-2 hover:shadow-2xl"
      onClick={() => selectRestaurant(id)}
    >
      <figure className="relative mb-2 w-full h-4/5">
          <span
            className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-0.5"
          >
            Rating: {rating} {getEmojiRating(rating)}
          </span>
        <img
          src={image.mediumSrc}
          alt="headhphones"
          className="w-full h-full object-cover rounded-lg "
        />
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light mx-3">{name}</span>
        {/*<span className="text-sm font-medium mx-3">${"Precio"}</span>*/}
      </p>
    </div>
  )
}
function getEmojiRating (rating) {
  switch (rating) {
    case 0:
      return <>😢</>

    case 1:
      return <>😔</>
    case 2:
      return <>😐</>
    case 3:
      return <>😀</>
    case 4:
      return <>😍</>

  }
}
