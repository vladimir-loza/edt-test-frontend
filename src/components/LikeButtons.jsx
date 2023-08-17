import {AiFillDislike, AiFillLike} from "react-icons/ai";

export const LikeButtons = ({onLike, onDislike}) => {
  return (
    <>
        <AiFillDislike className="text-3xl hover:text-indigo-500 cursor-pointer" onClick={onDislike} />
        <AiFillLike className="text-4xl hover:text-indigo-500 cursor-pointer" onClick={onLike}/>
    </>
  )
}