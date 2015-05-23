Rails.application.routes.draw do
  get '/', to: redirect('/about')

  # namespace :api, defaults: {format: :json} do
  #   namespace :v1 do
  #     get 'name' => 'name#index', :as => 'name'
  #   end
  # end

end
