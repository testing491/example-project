import { Link } from "react-router-dom";

function NavBar(){
    return (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pokemon_list">Pokémon List</Link>
            </li>
            <li>
              <Link to="/create_pokemon">Create Pokémon</Link>
            </li>
          </ul>
        </nav>
    )
}

export default NavBar;