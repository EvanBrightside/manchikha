FactoryGirl.define do
  factory :product do
    name { Faker::Name.name }
    category
  end
end
