Rails.application.routes.draw do

  get 'user/account'

  get 'user-account' => 'user#account'

  get 'wizard/steps'

  get 'step-1' => 'wizard#step-1'
  get 'step-2' => 'wizard#step-2'

  get 'dashboard/index'

  get '/' => 'dashboard#index'
  get 'notifications' => 'dashboard#notifications'
  get 'subscribers' => 'dashboard#subscribers'
  get 'subscribers-groups' => 'dashboard#subscribers-groups'
  get 'new-notification' => 'dashboard#new-notification'
  get 'website-settings' => 'dashboard#website-settings'

  # You can have the root of your site routed with "root"
  root 'dashboard#index'

end
