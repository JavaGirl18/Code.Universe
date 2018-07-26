class Api::PostsController < ApplicationController

    def index 
        if params[:attendee_id]
            puts "ATTENDEE"
            @event = Event.find(params[:event_id])
            @attendee= @event.attendees.where(attendee_id: params[:attendee_id])
            render json: @attendee.posts
        elsif params[:organizer_id]
            puts "ORGANIZER"
            @event = Event.find(params[:event_id])
            @organizer = @event.organizers.where(organzer_id: params[:organizer_id])
            render json: @organizer.posts
        else
            puts "DEFAULT"
            @event = Event.find(params[:event_id])
            puts @event.posts
            render json: @event.posts
        end
    end

    def show
        @post = Post.find(params[:id])
        render json: @post
    end

    def create
        @event = Event.find(params[:event_id])
    @post = @event.posts.create(post_params)
    render json: @post
    end

private 
def post_params
params.require(:post).permit(:title, :comment, :attendee_id, :organizer_id)
end


end