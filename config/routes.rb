Rails.application.routes.draw do
  root 'pages#index'

  get '/coords', to: 'coords#index'
  get '/scores', to: 'scores#index'
end
