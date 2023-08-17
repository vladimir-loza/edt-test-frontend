import {useContext} from "react";
import {RestaurantsContext} from "../context/restaurantsContext.jsx";
import {RiCloseCircleFill} from "react-icons/ri";
import {StarRating} from "./StarRating.jsx";
import {AddressTable} from "./AddressTable.jsx";
import {ContactTable} from "./ContactTable.jsx";
import {GMap} from "./GMap.jsx";
import {LikeButtons} from "./LikeButtons.jsx";
import {toast} from "sonner";

export const RestaurantPanel = () => {

  const { restaurantSelected, resetRestaurantSelected, interactWithRestaurant } = useContext(RestaurantsContext)
  if (!restaurantSelected) return <></>

  const {address, contact, image, name, rating, id} = restaurantSelected

  const onLike = () => {
    interactWithRestaurant(id, +1)
    toast.success('You like this! 🤩')
  }
  const onDislike = () => {
    interactWithRestaurant(id, -1)
    toast("You don't like this 😓")
  }


  return (
    <aside
      className={`${restaurantSelected ? 'flex ': 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
      style={{ width: "360px", height: "calc(100vh - 52px)", top: "52px" }}
    >
      <div className="flex justify-end ">
          <RiCloseCircleFill
            className="text-3xl text-black hover:cursor-pointer hover:text-indigo-500 mr-2 -mb-2 mt-2"
            onClick={resetRestaurantSelected}
          />
      </div>
      <h2 className="font-medium text-xl mb-4 text-center">{name}</h2>
      <div className="flex gap-3 justify-center mb-5">
        <StarRating rating={rating} id={id}/>
      </div>
      <figure className="px-3 mb-3">
        <img
          className="w-full h-44 rounded-lg object-cover mb-3"
          src={image.mediumSrc}
          alt={name}
        />
      </figure>

      <div className="w-full mb-3">
        <ContactTable contact={contact}/>
        <hr className="w-4/5 mx-auto border-1 mt-3"/>
      </div>
      <div className="w-full mb-3">
        <AddressTable address={address}/>
      </div>

      <div className="mb-4">
        <GMap
          lat={address.location.lat}
          lng={address.location.lng}
          height={"250px"}
          width={"92%"}
        />
      </div>

      <div className="flex justify-center items-center gap-4">
        <LikeButtons onLike={onLike} onDislike={onDislike}/>
      </div>
    </aside>
  )
}
