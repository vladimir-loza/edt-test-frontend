export const FilterButton = ({text, event}) => {
  return (
    <button
      type="button"
      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900
      focus:outline-none bg-white rounded-lg border border-gray-200
      hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-indigo-200"
      onClick={event}
    >
      {text}
    </button>
  )
}