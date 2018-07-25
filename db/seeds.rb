# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Users.destroy_all
Events.destroy_all


user1 = User.create(name:"ruby girl", email:"rubyrubyruby84@gmail.com", number:2023456788, password:"rubygirl")
user2 = User.create(name:"ruby girl", email:"ilovecoding18@gmail.com", number:2023456788, password:"rubygirl01")
user2 = User.create(name:"ruby girl", email:"ilovecoding18@gmail.com", number:2023456788, password:"rubygirl01")

event1 = Event.create(title:'women who code',date: , location:"Ponce City Market")
event2 = Event.create(title:'lunch and learn with Jamie',date: , location:"Ponce City Market")
event3 = Event.create(title:'women who code',date: , location:"Ponce City Market")
