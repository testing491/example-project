function Pokemon({pokemon}){

    console.log(pokemon)

    return (
        <div>
            <h1>{`Pokémon #${pokemon.id}`}</h1>
            <h2>{`Name: ${pokemon.name}`}</h2>
            <h2>{`Location: ${pokemon.location}`}</h2>
            <h2>{`Move: ${pokemon.move}`}</h2>
        </div>
    )
}

export default Pokemon;