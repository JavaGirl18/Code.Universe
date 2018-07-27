class Api::UsersController < ApplicationController
   
    def index
        @users =User.all
        render json: @users
    end
    
    def show
        @user = User.find(params[:id])
        @events = @user.events
        @userEvents = @user.events.map do |event|
            every_event = {
                id: event.id,
                title: event.title,
                location:event.location,
                time:event.time,
                details: event.details
            }
            # every_event[:attendee] = event.organizer.user if event.attendee_id
            # every_event[:organizer] = event.organizer.user  if event.organizer_id
            every_event
        end
        render json:{user: @user, events: @userEvents}
    end

    def create
        @user = User.create!(user_params)
        render json: @user
    end

    def update
        @user = User.find(params[:id])
        @user.update!(user_params)
        render json: @user
    end

    def destroy
        @user = User.find(params[:id]).delete
        render status: :ok
    end

private
    def user_params
        params.require(:user).permit(:name, :email, :number, :password)
      end
end
