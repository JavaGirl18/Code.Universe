class Api::EventsController < ApplicationController
   
        def index
            @events =Event.all
            render json: @events
        end
        
        def show
            @event = Event.find(params[:id])
            @organizers = @event.users
            @attendee = @event.attendees
            @posts = @event.posts.map do |post|
                custom_post = {
                    id: post.id,
                    comment: post.comment,
                    title: post.title,
                }
                puts post.inspect
                custom_post[:attendee] = post.attendee.user if post.attendee_id
                custom_post[:organizer] = post.organizer.user if post.organizer_id

                custom_post
            end
            render json: {event:@event, organizers: @organizers, posts:@posts}

          
        end
    
        def create
            @user = User.find(params[:user_id])
            @new_event = Event.create!(event_params)
            @organizer = Organizer.create!(user: @user, event: @new_event)
            render json: {event: @new_event, organizers: @new_event.organizers}
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
            params.require(:event).permit(:title, :date, :time, :location, :details)
          end
  
    
end
