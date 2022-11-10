import Pokemon from "./Pokemon"

function PokemonContainer({pokemons}){

    const pokemonComponents = pokemons.map(pokemon => {
        return <Pokemon key={pokemon.id} pokemon={pokemon}/>
    })

    return (
        <>
            {pokemonComponents}
        </>
    )
}

export default PokemonContainer;