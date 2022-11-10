class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :move
end
