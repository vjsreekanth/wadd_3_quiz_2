# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

PASSWORD = "123"
Bid.delete_all
Auction.delete_all
User.delete_all

super_user = User.create(
  first_name: "Jon",
  last_name: "Snow",
  email: "js@winterfell.gov",
  password: PASSWORD,
  is_admin: true,
)
10.times do
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: PASSWORD,
  )
end

users = User.all




20.times do
    created_at = Faker::Date.backward(365 * 5)
  
    # Faker is a module. We are accessing classes on the module
    # that will create fake data. No need to require the faker gem at the
    # top of this script because we can access all gems in the Gemfile
    # from anywhere.
    a = Auction.create(
      title: Faker::Commerce.product_name,
      description: Faker::Hacker.say_something_smart,
      end_date: Faker::Date.forward(days: 23), 
      reserve_price: Faker::Commerce.price,
      created_at: created_at,
      updated_at: created_at,
    #   # We can use the user instance for the "user" attribute rather than using "user_id"
      user: users.sample,
    )
    if a.valid?
      # With the writer q.answers=(objects), the answer instances that are being assigned
      # to the question will be saved to the database and associated to the question
      a.bids = rand(0..5).times.map do
        Bid.new(
          bid_price: Faker::Commerce.price,
          user: users.sample,
        )
      end
      
    end
  end
auctions = Auction.all
bids = Bid.all
    puts Cowsay.say("Generated #{Auction.count} auctions", :koala)
    puts Cowsay.say("Generated #{Bid.count} bids", :stegosaurus)
    puts Cowsay.say("Generated #{User.count} users", :ghostbusters)
    puts Cowsay.say("Sign in with #{super_user.email} and password: #{PASSWORD}", :cow)