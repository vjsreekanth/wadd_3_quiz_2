Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :auctions, only: [:index, :show, :create] do
        resources :bids, shallow: :true, only: [:create]
      end  
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
