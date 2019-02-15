Rails.application.routes.draw do
  resources :cocktails do
  resources :doses, only: [:create]
  resources :ingredients, only: [:create]
  end#
  resources :doses, only: [:destroy]
end
