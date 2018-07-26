class Api::PostsController < ApplicationController

    def index 
        if params[:attendee_id]
            puts "ATTENDEE"
            @event = Event.find(params[:event_id])
            @attendee= @event.attendees.find(params[:attendee_id]).posts
            render json: @attendee
        elsif params[:organizer_id]
            puts "ORGANIZER"
            @event = Event.find(params[:event_id])
            @organizer = @event.organizers.find(params[:organizer_id]).posts
            render json: @organizer
        else
            puts "DEFAULT"
            @event = Event.find(params[:event_id])
            puts @event.posts
            render json: @event.posts
        end
    end

    def show
        @attendee = Event.find(params[:event_id]).attendees.where(attendee_id: params[:attendee_id])
        # @attendee = Attendee.find(params[:attendee_id])
        # @post = @attendee.posts
        render json: @attendee.posts
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