Rails.application.routes.draw do

  get 'wizard/steps'

  get 'dashboard/index'

  get '/' => 'dashboard#index'
  get 'notifications' => 'dashboard#notifications'
  get 'subscribers' => 'dashboard#subscribers'
  get 'subscriber-groups' => 'dashboard#subscriber-groups'
  get 'settings' => 'dashboard#settings'

  # You can have the root of your site routed with "root"
  root 'dashboard#index'

end
