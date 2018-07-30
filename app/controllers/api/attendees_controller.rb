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
  puts params
  @event = Event.find(params[:event_id])
  @user = User.find_by_email(params[:email])
  @attendee = Attendee.create(user:@user, event: @event)
  render json: @attendee
end
end

