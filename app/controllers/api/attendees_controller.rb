class Api::AttendeesController < ApplicationController

def index
        @event = Event.find(params[:event_id])
        @attendees = @event.attendees
        render json: @attendees
end

def show
    @attendee = Attendee.find(params[:id])
    render json: @attendee
end



end
