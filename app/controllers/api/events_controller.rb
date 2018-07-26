class Api::EventsController < ApplicationController
   
        def index
            @events =Event.all
            render json: @events
        end
        
        def show
            @event = Event.find(params[:id])
            render json: @event
        end
    
        def create
            @event = Event.create!(event_params)
            render json: @event
        end
    
        def update
            @event = Event.find(params[:id])
            @event.update!(event_params)
            render json: @event
        end
    
        def destroy
            @event= Event.find(params[:id]).delete
            render status: :ok
        end
    
    private
        def event_params
            params.require(:event).permit(:title, :date, :time, :location)
          end
  
    
end
