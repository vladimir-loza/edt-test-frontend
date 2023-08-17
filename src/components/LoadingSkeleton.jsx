import {RestaurantSkeletonCard} from "./RestaurantSkeletonCard.jsx";

export const LoadingSkeleton = () => {
  return (
    <div className="container mx-auto flex flex-wrap gap-3">
      {
        Array.from({length: 20}).map((_, idx) => (
          <RestaurantSkeletonCard key={idx}/>
        ))
      }
    </div>
  )
}