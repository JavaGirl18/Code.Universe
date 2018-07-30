class Api::AttendeesController < ApplicationController

def index
        @event = Event.find(params[:event_id])
        @attendees = @event.attendees
        render json: @attendees
end

def show
    @event = Event.find(params[:event_id])
    @attendee = @event.attendees.find(params[:id])
  render json:@attendee
end

def create
  @event = Event.find(params[:event_id])
  @user = User.find(params[:user_id])
  @attendee = Attendee.create(user:@user, event: @event)
end
end

