// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokemonContainer from "./PokemonContainer"
import CreatePokemonForm from "./CreatePokemonForm";
import NavBar from "./NavBar";

function App() {
  const [count, setCount] = useState(0);
  const [pokemons, setPokemons] = useState([])
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState([])
  const [formSubmitted, setFormSubmitted] = useState(false)

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

  function handleChange(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault();
    //console.log(formData)
    fetch("/pokemons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if(response.ok){
        response.json().then(pokemon => {
          setPokemons([...pokemons, pokemon])
          setErrors([])
          setFormSubmitted(true)
        })
      }
      else{
        response.json().then(errorData => {
          setErrors(errorData.errors)
        })
      }
    })
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/pokemon_list">
            <h1>Pokémon List:</h1>
            <PokemonContainer pokemons={pokemons}/>
          </Route>
          <Route exact path="/create_pokemon">
            <CreatePokemonForm handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} formSubmitted={formSubmitted}/>
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