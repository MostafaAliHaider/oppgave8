import { useState } from "react"
import { getMovies } from "../lib/services/movie"

const Movies = ({data, setData}) => {

    const [content, setContent] = useState ([])

    const fetchMovies = () =>{
        getMovies();

    } 

    return (
        <>
        <button type="button" onClick={fetchMovies}>Hent data</button>
        </>
    )
}
export default Movies