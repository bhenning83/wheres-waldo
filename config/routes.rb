Rails.application.routes.draw do
  root 'pages#index'

  get '/data', to: 'data#index'
end
