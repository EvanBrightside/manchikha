FactoryGirl.define do
  factory :product do
    name { Faker::Name.name }
    category

    trait :product_with_image do
      asset { File.open(Rails.root.join('spec/assets/image.jpg')) }
    end
  end
end
