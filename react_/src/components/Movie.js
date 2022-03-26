import { Link, useParams } from "react-router-dom"
import Movies from "./Movies"

const Movie = ({data}) => {

    const {name} = useParams();
    console.log(name);

    const movieListe = data.find((movieL)=> {
        return movieL.slug === name
    })
    return (
        <>
        
        <article>
            <h3> Feature{movieListe.actor} and {movieListe.actor2}</h3>
            <h1>{movieListe.title}</h1>
            <p>{movieListe.tekst}</p>
            <img src={movieListe.poster.asset.url} className=" w-1/4 hover:w-1/2"></img>
            <button><Link to="/movies">Back to movies</Link></button>
        </article>
        
        
        </>
    )
}
export default Movie