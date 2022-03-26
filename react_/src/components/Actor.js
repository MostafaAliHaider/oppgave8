import { Link, useParams } from "react-router-dom"

const Actor = ({actor}) => {

    const {name} = useParams();
    console.log(name);

const actorListe = actor.find((actorL)=> {
    return actorL.slug === name
})

return(

    <article>
    <img src={actorListe.poster.asset.url} alt="Skuespiller"></img>
    <h3>{actorListe.actor}</h3>
    <p>{actorListe.actorTekst}</p>
    <button><Link to="/Actors">Back to actors</Link></button>
    </article>


)

}
export default Actor