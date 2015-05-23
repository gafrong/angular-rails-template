Rails.application.routes.draw do
  get '/', to: redirect('/')

  namespace :api, defaults: {format: :json} do
    namespace :v1 do

    end
  end

end
