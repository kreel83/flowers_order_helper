Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :flowers
  resources :compositions do
    resources :proportions
  end
  resources :orders do
    resources :quantities
  end
end
