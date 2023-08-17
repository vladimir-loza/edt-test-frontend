import {AiFillStar, AiOutlineStar} from "react-icons/ai";

export const StarRating = ({rating, id}) => {
  const [base1, base2] = id.split("-")

  const fillStarts = () => {
    return (
      <>
        {
          Array.from({length: rating}).map((obj, idx) => (
            <AiFillStar key={`${base1}_${idx}`}/>
          ))
        }
      </>
    )
  }

  const emptyStars= () => {

    return (
      <>
        {
          Array.from({length: 4 - rating}).map((obj, idx) => (
            <AiOutlineStar key={`${base2}_${idx}`}/>
          ))
        }
      </>
    )
  }
  return (
    <>{fillStarts()}{emptyStars()}</>
  )
}