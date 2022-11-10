function CreatePokemonForm({handleChange, handleSubmit, errors}){

    const errorList = errors.map((error, index) => {
        return <li key={index} style={{color:"red"}}>{error}</li>
    })
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Create a Pokémon Form:</h1>
                <label htmlFor="name">Name: </label><br/>
                <input onChange={handleChange} type="text" id="name" name="name"/><br/>
                <label htmlFor="location">Location: </label><br/>
                <input onChange={handleChange} type="text" id="location" name="location"/><br/>
                <label htmlFor="move">Move: </label><br/>
                <input onChange={handleChange} type="text" id="move" name="move"/><br/>
                <input type="submit"/>
            </form>
            <ul>
                {errorList}
            </ul>
        </div>
    )
}

export default CreatePokemonForm;