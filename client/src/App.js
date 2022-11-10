// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokemonContainer from "./PokemonContainer"

function App() {
  const [count, setCount] = useState(0);
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  useEffect(() => {
    fetch("/pokemons")
    .then(response => response.json())
    .then(pokemonData => setPokemons(pokemonData))
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/pokemon_list">
            <h1>Pokémon List:</h1>
            <PokemonContainer pokemons={pokemons}/>
          </Route>
          <Route exact path="/">
            <h1>Welcome to the Pokémon App!</h1>
            <h2>Number of times this webpage was visited: {count}</h2>
          </Route>
          <Route path="*">
            <h1>Page Not Found!</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;