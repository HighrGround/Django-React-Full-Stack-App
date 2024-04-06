

// router
import { Link } from "react-router-dom"

export const vanslist = ({vanslist}) => {

  return (
    <div className="vanslist">
      <img src={vans.thumbnail} alt="" />
      <Link to={`/van/${vans.id}`}>{van.title}</Link>
    </div>
  )
}