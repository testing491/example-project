class PokemonsController < ApplicationController

    def index
        pokemons = Pokemon.all
        render json: pokemons, status: :ok
    end

    def create
        pokemon = Pokemon.create(pokemon_params)
        if pokemon.valid?
            render json: pokemon, status: :created
        else
            render json: { errors: pokemon.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def pokemon_params
        params.permit(:name, :location, :move)
    end

end
