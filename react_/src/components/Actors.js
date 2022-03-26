import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getActor } from "../lib/services/movieService";

const Actors = ({ actor, setActor }) => {
    const bringActor = async () => {
        const dataA = await getActor();
        setActor(dataA)
    }

useEffect(()=>{
    bringActor();
}, [])

    return (
        <>
        <h2 className="bg-black">Movie actors below</h2>
        <button type="button" onClick={bringActor}>Actors</button>
            {actor?.length > 0 ? actor.map((actorList) => {
                console.log(actorList)
                return <article>
                    <h3>{actorList.title}</h3>
                    <p>{actorList.actor}</p>
                    <button><Link to={actorList.slug}>Actor info</Link></button>
                </article>

            }) : null}
        </>
    )

}
export default Actors