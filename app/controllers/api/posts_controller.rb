class Api::PostsController < ApplicationController

    def index 
        if params[:attendee_id]
            @event = Event.find(params[:event_id])
            @attendeePosts = @event.attendees.find(params[:attendee_id])
        
            render json: @attendeePosts.posts
        else 
        @event = Event.find(params[:event_id])
        @organizerPosts = @event.organizers.find(params[:organizer_id])
      
        render json: @organizerPosts.posts
    end
    def show
        @post = Post.find(params[:id])
        render json: @post
    end
    def create

    end

end


end