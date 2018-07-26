Rails.application.routes.draw do
  namespace :api do
    resources :users 

    resources :events do
      resources :organizers do
        resources :posts
      end
    end
    resources :events do
      resources :attendees do
        resources :posts 
      end
    end
      resources :events do
        resources :posts
      end
    end
    end  
