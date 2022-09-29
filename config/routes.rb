Rails.application.routes.draw do
  
  resources :characters
  resources :events
  resources :items
  resources :locations
  resources :options
  resources :users, except: :show
  get '/me', to: 'users#show'
  post '/me', to: 'sessions#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/character-attributes', to: 'character_attributes#create'
  post '/locations-select', to: 'locations#select'
  post '/locations-select-again', to: 'locations#select_again'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
