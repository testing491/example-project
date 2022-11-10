Rails.application.routes.draw do
  resources :pokemons
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
