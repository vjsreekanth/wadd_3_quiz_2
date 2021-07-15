Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :auctions, only: [:index, :show, :create] do
        resources :bids, shallow: :true, only: [:create, :index]
      end  
      resource :session, only: [:create, :destroy] 
      get("/current_user", to: "sessions#get_current_user")
      resources :users, only: [:create] do
        # get :current -> /api/v1/users/:user_id/current
        get :current, on: :collection # -> /api/v1/users/current
      end
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
