import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getMovies } from "../lib/services/movieService";


const Movies = ({data, setData}) => {

    const [content, setContent] = useState ([])

    const fetchMovies = async (title, actor) =>{
        const dataM = await getMovies(); 
        setData(dataM)
        
    } 
useEffect(()=>{
    fetchMovies();
}, [])

    return (
        <>
        <h2 className="flex justify-center text-2xl">Movies below</h2>
        <button type="button" onClick={fetchMovies} className="bg-gray-500 text-blue-100 py-2 px-4 rounded-lg">Movies</button>
        {data?.length > 0 ? data.map((movieList)=>{
            return <article key={movieList.title} className="text-lg font-bold mt-3">
                <h3>{movieList.title}</h3>
            <button><Link to={movieList.slug} className="bg-orange-500 text-sm text-blue-50 py-2 px-2 rounded-lg" >Movie Info</Link></button>
            </article>
        }) : null}
        
        </>
    )
}
export default Movies