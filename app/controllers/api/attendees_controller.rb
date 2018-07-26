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



end

# @user = User.find(params[:id])
# @posts= @user.posts
# render json: {user:@user, posts:@posts}