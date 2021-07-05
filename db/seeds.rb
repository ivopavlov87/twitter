# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(username: "demoUser", password: "pa5Sword!")
User.create!(username: "testUser", password: "pa5Sword!")
Tweet.create!(user_id: 1, body: "This is the first Tweet!")
Tweet.create!(user_id: 1, body: "This is the second Tweet!")
Tweet.create!(user_id: 2, body: "This is the third Tweet!")