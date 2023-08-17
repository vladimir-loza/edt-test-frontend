export const RestaurantSkeletonCard = () => {
  return (
    <div
      className="bg-white w-56 h-52 rounded-lg shadow animate-pulse"
    >
      <figure className="relative mb-2 w-full h-4/5">
          <div
            className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5"
          >
            <div className=" bg-gray-200 rounded-full w-10 mb-4"></div>
          </div>
        <div
          className="w-full h-full rounded-lg bg-gray-200"
        ></div>
      </figure>
      <div className="flex justify-between">
        <div className=" mx-3 flex items-center">
          <div className="h-2.5 bg-gray-200 rounded-full w-20 mb-4 mt-1"></div>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full w-7 mb-4 mt-1 mx-4"></div>
      </div>
    </div>
  )
}