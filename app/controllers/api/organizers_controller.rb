class Api::OrganizersController < ApplicationController

        def index
                @event = Event.find(params[:event_id])
                @organizers = @event.organizers
                render json: @organizers
        end
        
        def show
            @organizer = Organizer.find(params[:id])
            render json: @organizer
        end
        
        def destroy
            @organizer = Organizer.find(params[:id]).delete
            render status: :ok
        end
        

end
