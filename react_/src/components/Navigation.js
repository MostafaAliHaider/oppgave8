import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (

        <nav className="bg-gray-100 py-10 flex items-center justify-center">
            <div>
                <div >
                    <ul className="flex justify-center gap-3">
                        <li className="bg-blue-500 text-blue-100 py-2 px-4 rounded-lg"><NavLink to="/movies">Movies</NavLink></li>
                        <li className="bg-red-500 text-red-100 py-2 px-4 rounded-lg"><NavLink to="/actors">Actors</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navigation

/* "max-w-7xl mx-auto border border-red-600" */